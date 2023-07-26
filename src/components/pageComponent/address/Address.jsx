import React, { memo, useEffect, useState } from 'react'
import { apiGetPublicProvinces, apiGetPublicDistrict } from '../../../api/address.api'
import Select from '../select/Select'
import InputReadOnly from '../inputReadOnly/InputReadOnly'

const Address = ({address, setAddress}) => {

    const [provinces, setProvinces] = useState([])
    const [districts, setDistricts] = useState([])
    const [province, setProvince] = useState('')
    const [district, setDistrict] = useState('')
    const [reset, setReset] = useState(false)

    useEffect(() => {
        const fetchPublicProvince = async () => {
            const response = await apiGetPublicProvinces()
            if (response.status === 200) {
                setProvinces(response?.data.results)
            }
        }
        fetchPublicProvince()
    }, [])
    useEffect(() => {
        setDistrict(null)
        const fetchPublicDistrict = async () => {
            const response = await apiGetPublicDistrict(province)
            if (response.status === 200) {
                setDistricts(response.data?.results)
            }
        }
        province && fetchPublicDistrict()
        !province ? setReset(true) : setReset(false)
        !province && setDistricts([])
    }, [province])
    
    // useEffect(() => {
    //     setAddress(prev => ({
    //         ...prev,
    //         address: `${district ? `${districts?.find(item => item.district_id === district)?.district_name},` : ''} ${province ? provinces?.find(item => item.province_id === province)?.province_name : ''}`,
    //         // province: province ? provinces?.find(item => item.province_id === province)?.province_name : ''
    //     }))
    //     const addressString = address.address;

    //     console.log(addressString);
    // }, [province, district])

    useEffect(() => {
        const formattedAddress = `${district ? `${districts?.find(item => item.district_id === district)?.district_name},` : ''} ${province ? provinces?.find(item => item.province_id === province)?.province_name : ''}`;
        setAddress(formattedAddress);
        console.log(formattedAddress);
      }, [province, district]);
      
    return (
        <div>
            <h2 className='mb-2 text-sm font-medium text-gray-900 dark:text-white'>Địa chỉ</h2>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-4 mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    <Select type='province' value={province} setValue={setProvince} options={provinces} label='Tỉnh/Thành phố' />
                    <Select reset={reset} type='district' value={district} setValue={setDistrict} options={districts} label='Quận/Huyện' />
                </div>
                <InputReadOnly
                    label='Địa chỉ cụ thể'
                    value={`${district ? `${districts?.find(item => item.district_id === district)?.district_name},` : ''} ${province ? provinces?.find(item => item.province_id === province)?.province_name : ''}`}
                />

            </div>
        </div>
    )
}

export default memo(Address)
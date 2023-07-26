import { getWorkerList } from 'api/workerList.api';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import Header from 'components/layout/header'
import {Button} from 'components/pageComponent/Button/Button';
import Item from 'components/pageComponent/Item';
import { getUserInfo } from 'features/login/loginSlide';
import factories from 'features/post/factories';
import React, { useEffect } from 'react'

const FindWorker = () => {
  const { postDetail } = useAppSelector(state => state.post)
  const dispatch = useAppDispatch()

  useEffect(() => {
    getWorkerList()
      .then((res) => {
        // console.log(res);
        console.log("worlerList:",postDetail);
        
        // console.log((res.data as any).data["data"]);
        
        // if ((res.data as any).data) {
        //   dispatch({ type: getUserInfo((res.data as any).data.data).type, payload: (res.data as any).data.data })
        // }
      }
      )
      .catch((error) => {
        console.log("Error fetching user data:", error);
      });
  }, []);
  return (
    <>
    {/* <Header/> */}
    <div className='w-full bg-white shadow-md rounded-md mt-32 relative'>
            <div className='flex items-center justify-between my-3'>
                <h4 className='text-xl font-semibold px-2'>Danh sách bài đăng</h4>
                <span>Cập nhật: 12:05 25/08/2022</span>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <span>Sắp xếp:</span>
                <Button size='sm' variant='default'>Mặc định</Button>
                <Button size='sm' variant='outline'>Mới nhất</Button>
            </div>
            <div className='items'>
              {/* <Item/> */}
                {/* {postDetail?.length > 0 && postDetail.map((item:any) => { */}
                    {/* return ( */}
                        <Item
                            // key={item?.id}
                            status='Đang tuyển'
                            address='Viet Nam'
                            attributes='Somthing'
                            content='We have already implemented the ChatGPT API, and I am looking for someone who can provide us with a piece of code. The details are given below:

                            1. I want to fine-tune (train) ChatGPT using data about our company, products, and services.
                            2. We need the code in simple JavaScript using the fetch function.
                            
                            Our goal is to use ChatGPT as a customer assistance executive, so we need to train ChatGPT specifically on information about our company, products, and services.'
                            images=""
                            star={3}
                            title='Cần tuyển nhân viên dọn vệ sinh'
                            user='Nguyen Hung'
                            CategoryId='Thợ sửa ống nước'
                            name='QuocDC'
                            phone="0865634354"
                        />
                    {/* ) */}
                {/* })} */}
            </div>
        </div>
    </>
  )
}

export default FindWorker
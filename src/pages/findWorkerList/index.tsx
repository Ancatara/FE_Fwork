import { getPostDetail } from 'api/postList.api';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import Header from 'components/layout/header'
import { Button } from 'components/pageComponent/Button/Button';
import Item from 'components/pageComponent/Item';
import ItemWorkerList from 'components/pageComponent/ItemWorkerList';
import { DEFAULT_PAGE, LIMIT } from 'constants/common';
import factories from 'features/post/factories';
import { getUserListInfo } from 'features/user/userSlice';
import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';

const FindWorker = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch()
  const userInfo = useAppSelector(state => state.user)
  console.log(userInfo)
  const [page,setPage] = useState<number>(()=>
    searchParams.get("page") ? Number(searchParams.get("page")) : DEFAULT_PAGE
  )

  useEffect(() => {
    dispatch({
      type:getUserListInfo().type,
      payload:{
        limit:LIMIT,
        page:page,
      }
    })
  }, [location]);
  return (
    <>
      <Header />
      <div className='w-ful rounded-md mt-32'>
        <div className='flex items-center justify-between my-3'>
          <h4 className='text-xl font-semibold'>Danh sách ứng viên</h4>
          <span>Cập nhật: 12:05 25/08/2022</span>
        </div>
        <div className='flex items-center gap-2 my-2'>
          <span>Sắp xếp:</span>
          <Button size='sm' variant='default'>Mặc định</Button>
          <Button size='sm' variant='outline'>Mới nhất</Button>
        </div>
        <div className='mx-10'>
          <div className="grid grid-cols-2 gap-4 mb-10" >
            {/* {postDetail?.length > 0 && postDetail.map((item:any) => { */}
            {/* {postDetail?.length > 0 && postDetail.map((item:any) => {
            return (
              <> */}
            <ItemWorkerList
              // key={item?.id}
              status='Rảnh'
              address='Viet Nam'
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
            <ItemWorkerList
              // key={item?.id}
              status='Rảnh'
              address='Viet Nam'
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
            {/* </>
            )
           })} */}
          </div>
        </div>
      {/* {showDialog && (
        <ItemWorkerDetail
          status={status}
          name={name}
          CategoryId={CategoryId}
          address={address}
          content={content}
          onClose={handleCloseDialog}
        />
      )} */}
      </div>
    </>
  )
}

export default FindWorker
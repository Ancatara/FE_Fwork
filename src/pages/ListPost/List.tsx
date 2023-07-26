import React, { useEffect } from 'react';
// import { getPosts, getPostsLimit } from '../../store/actions/post';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {Button} from 'components/pageComponent/Button/Button';
import Item from 'components/pageComponent/Item';
import { useAppDispatch, useAppSelector } from 'app/hooks';

interface ListProps {
  categoryCode: string;
}

const List: React.FC<ListProps> = ({ categoryCode }) => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const { posts } = useAppSelector((state: any) => state.post);

  // useEffect(() => {
  //   let params: [string, string][] = [];
  //   for (let entry of searchParams.entries()) {
  //     params.push(entry);
  //   }
  //   let searchParamsObject: { [key: string]: string[] } = {};
  //   params?.forEach((i) => {
  //     if (Object.keys(searchParamsObject)?.some((item) => item === i[0])) {
  //       searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]];
  //     } else {
  //       searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] };
  //     }
  //   });
  //   // if (categoryCode) searchParamsObject.categoryCode = categoryCode;
  //   dispatch(getPostsLimit(searchParamsObject));
  // }, [searchParams, categoryCode]);

  return (
    <div className='w-full p-2 bg-white shadow-md rounded-md px-6'>
      <div className='flex items-center justify-between my-3'>
        <h4 className='text-xl font-semibold'>Danh sách tin đăng</h4>
        <span>Cập nhật: 12:05 25/08/2022</span>
      </div>
      <div className='flex items-center gap-2 my-2'>
        <span>Sắp xếp:</span>
        {/* <Button bgColor='bg-gray-200' text='Mặc định' />
        <Button bgColor='bg-gray-200' text='Mới nhất' /> */}
      </div>
      <div className='items'>
        {/* {posts?.length > 0 &&
          posts.map((item: any) => {
            return (
              <Item
                key={item?.id}
                address={item?.address}
                attributes={item?.attributes}
                content={JSON.parse(item?.description)}
                images={JSON.parse(item?.images?.image)}
                star={+item?.star}
                title={item?.title}
                user={item?.user}
                CategoryId={item?.id}
              />
            );
          })} */}
      </div>
    </div>
  );
};

export default List;

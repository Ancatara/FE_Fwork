import { Button } from 'components/pageComponent/Button/Button';
import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FastField, Form, Formik } from 'formik';
import InputField from 'components/common/InputField';
import TextareaField from 'components/common/TextareaField';
import SelectField from 'components/common/SelectField';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getPostDetailInfo } from 'features/post/postSlice';

interface Post {
  title: string;
  content: string;
  status: string;
  CategoryId: string;
  address: string
}

const PostDetail = () => {
  const { postId } = useParams();
  const postInfo = useAppSelector(state=>state.post)
  const dispatch = useAppDispatch()
  const [isEditing, setIsEditing] = useState(false);

  const initialPost = {
    id: postId,
    title: 'Cần tuyển nhân viên tạp vụ',
    content: 'This is the content of the post.',
    author: 'Quoc DC',
    date: '2023-06-15',
    status: 'Đang tuyển',
    CategoryId: 'Nhân viên tạp vụ',
    address: 'Đà Nẵng',
    image: 'https://images.careerbuilder.vn/content/news/01BinhMKT/news/201730113.gif'
  };

  const [post, setPost] = useState(initialPost);

  const handleOnChangePost = (fieldName: keyof Post, value: string) => {
    setPost((prevPost) => ({
      ...prevPost,
      [fieldName]: value,
    }));
  };
  const handleDeletePost = () => {
    console.log(`Deleting post with ID: ${postId}`);
  };

  const handleEditPost = () => {
    setIsEditing(true);
  };

  const handleUpdatePost = () => {
    setIsEditing(false);
    console.log('Updated post:', post);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setPost(initialPost);
  };
  useEffect(()=>{
    console.log(postInfo)
    if(postInfo.postDetail===null || postInfo.postDetail._id!== postId){
      dispatch({
        type:getPostDetailInfo().type,
        payload:postId
      })
    }
  },[])

  return (
    <div className="container mx-auto mt-28">
      <div className="bg-white shadow-md rounded-lg px-8 py-9">
        <h2 className="text-2xl font-semibold mb-4">Quản lý bài viết</h2>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{`Bài viết được tạo bởi ${post.author}`}</span>
          <span>{`Ngày tạo ${post.date}`}</span>
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <Button variant='default' onClick={handleEditPost}>Chỉnh sửa</Button>
          <Button variant='destructive' onClick={handleDeletePost}>Xóa bài</Button>
        </div>

        {isEditing ? (
          <Formik
            enableReinitialize
            initialValues={initialPost}
            onSubmit={(values) => {
              handleUpdatePost();
            }}
            validateOnChange={false}
          // validationSchema={CreatePostSchema}
          >
            {({ values, touched, errors, setFieldValue }) => {
              return (
                <div className='flex'>
                  <div
                    className='w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer'
                  >
                    <img src={post.image}></img>
                    <span className='bg-overlay-70 text-white px-2 rounded-md absolute left-1 bottom-4'>Ảnh</span>
                  </div>
                  <div className='w-3/5 p-6'>
                    <div className='flex flex-col'>
                      <span className='text-sm font-medium text-gray-900 mb-2'>Tiêu đề:</span>
                      <FastField
                        component={InputField}
                        type="text"
                        name="title"
                        value={post.title}
                      />
                    </div>
                    <div className='flex flex-col my-2'>
                      <span className='text-sm font-medium text-gray-900 mb-2'>Địa chỉ:</span>
                      <FastField
                        component={InputField}
                        type="text"
                        name="address"
                        value={post.address}
                      />
                    </div>
                    <div className='my-2 flex items-center gap-2'>
                      <span className='flex-3 text-sm font-medium text-gray-900 mb-2'>Trạng thái:</span>
                      <select
                        name="status"
                        value={post.status}
                        onChange={(e) => handleOnChangePost("status", e.target.value)}
                        className="border rounded w-2/3 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option value="">{post.status}</option>
                        <option value="close">Đã đóng</option>
                        <option value="onGoing">Đang tuyển</option>
                      </select>
                    </div>
                    <div>
                    <span className='text-sm font-medium text-gray-900 mb-2'>Nội dung</span>
                    <FastField
                      component={TextareaField}
                      name="content"
                      value={post.content}
                      rows={6}
                      />
                      </div>
                    <div className="flex my-2 flex-col ">
                      <span className='text-sm font-medium text-gray-900 mb-2'>Vị trí tuyển dụng:</span>
                      <FastField
                        component={SelectField}
                        name="CategoryId"
                        // placeholder={
                        //   categoryInfo.categoryList.find(
                        //     (item) => item._id === values.CategoryId
                        //   )?.name || 'Chọn loại công việc'
                        // }
                        // options={categoryInfo.categoryList.map((item, index) => ({
                        //   value: item._id,
                        //   label: item.name,
                        // }))}
                        className=" w-[130px]"
                      />
                    </div>
                  </div>
                </div>
              )
            }}
          </Formik>
        ) : (
          <div className='flex border border-gray-400 rounded-lg p-4 my-2'>
            <div
              className='w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer'
            >
              <img src={post.image}></img>
              <span className='bg-overlay-70 text-white px-2 rounded-md absolute left-1 bottom-4'>Ảnh</span>
            </div>
            <div className='w-3/5 p-6'>
              <div className='flex'>

                <div className='flex gap-4 w-full flex-col'>
                  <div className='text-red-600 font-medium'>

                    {post.title}
                  </div>
                </div>
              </div>
              <div className='inline-flex'>
                Địa chỉ của bạn: Đà Nẵng
              </div>
              <div className='my-2 flex items-center justify-between gap-2'>
                <span className='flex-3'>Trạng thái:</span>
                <span className='font-bold flex-1 text-green-600'>{post.status}</span>
              </div>
              <p className='text-gray-500 w-full h-[50px] text-ellipsis overflow-hidden'>
                {post.content}
              </p>
              <span className='flex max-w-max bg-green-300 p-2 mt-2  rounded-2xl'>{post.CategoryId}</span>
              <div className='flex items-center my-5 justify-between'>
              </div>
            </div>
          </div>
        )}
        <div className="mt-6">
          {isEditing ? (
            <div className=' flex justify-center gap-3'>

              <Button
                variant='success'
                onClick={handleUpdatePost}
              >
                Lưu chỉnh sửa
              </Button>
              <Button
                onClick={handleCancelEdit}
                variant='destructive'
              >
                Hủy bỏ
              </Button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

    </div>
  );
};

export default PostDetail;

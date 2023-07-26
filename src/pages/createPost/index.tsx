import { getCategory, getUserProfile } from 'api/userProfile.api';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import InputField from 'components/common/InputField';
import Address from 'components/pageComponent/address/Address';
import { getCategoryList } from 'features/login/loginSlide';
import factories from 'features/post/factories';
import { FastField, Form, Formik } from 'formik';
import { IPost } from 'interfaces';
import { CreatePostFormType } from 'interfaces/formType';
import React, { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
// import Joi from "joi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreatePostSchema } from 'validation';
import moment from 'moment';
import TextareaField from 'components/common/TextareaField';
import SelectField from 'components/common/SelectField';
import { RiAttachment2 } from 'react-icons/ri';
import { HiLocationMarker, HiPhotograph } from 'react-icons/hi';
import InputFileField from 'components/common/InputFileField';
import { getBearerAccessToken } from 'utils/localStorage/LocalStorage';
import axios, { AxiosError } from 'axios';
import { axiosRequest } from 'utils/axiosRequest';
import { useNavigate } from 'react-router-dom';

export interface CreatePostPageProps {}

export default function CreatePostPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const categoryInfo = useAppSelector((state) => state.login);
  const [image, setImage] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [initialValues, setInitialValues] = useState<CreatePostFormType>({
    title: '',
    content: '',
    address: '',
    salary: 0,
    startDate: new Date(),
    duration: 0,
    CategoryId: '',
    image: '',
  });

  useEffect(() => {
    getCategory()
      .then((res) => {
        console.log('category', (res.data as any).data);

        if ((res.data as any).data) {
          dispatch({
            type: getCategoryList((res.data as any).data.data).type,
            payload: (res.data as any).data.data,
          });
        }
      })
      .catch((error) => {
        console.log('Error fetching user data:', error);
      });
  }, []);
  const handleSubmit = async (values: CreatePostFormType) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('CategoryId', values.CategoryId);
    formData.append('address', values.address);
    formData.append('content', values.content);
    formData.append('duration', `${values.duration}`);
    formData.append('salary', `${values.salary}`);
    formData.append('startDate', `${values.startDate}`);
    formData.append('title', values.title);
    for (const file of values.image) {
      formData.append('image', file);
    }
    try {
      const response = await axiosRequest({
        method: 'POST',
        url: '/post/create',
        data: formData,
      });
      toast.success(response.message);
      navigate(`/post/${response.data._id}`);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <body className="mx-auto mt-40 mb-10 pb-16 rounded-lg border-2 border-green-600 p-1 w-7/12">
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          validateOnChange={false}
          validationSchema={CreatePostSchema}
        >
          {({ values, touched, errors, setFieldValue }) => {
            return (
              <Form>
                <div className="">
                  <h4 className="flex content-center justify-center my-8 text-4xl text-green-700">
                    ĐĂNG BÀI
                  </h4>
                </div>

                <form className="mx-auto w-2/3">
                  <div className="mb-6">
                    <FastField
                      component={InputField}
                      name="title"
                      title="Tiêu đề"
                      placeholder="Tiêu đề của bạn..."
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Ngày bắt đầu
                    </label>
                    <input
                      // value={values['startDate'].toISOString().split('T')[0]}
                      value={moment(values['startDate']).format('YYYY-MM-DD')}
                      onChange={(e) => {
                        console.log(e);
                        setFieldValue('startDate', new Date(e.target.value));
                      }}
                      type="date"
                      id="startDate"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter duration for task"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <FastField
                      component={InputField}
                      name="duration"
                      title="Tổng ngày thuê"
                      placeholder="Tổng số ngày thuê..."
                      type="number"
                    />
                  </div>
                  <div className="mb-6">
                    <FastField
                      component={InputField}
                      name="salary"
                      title="Tiền lương theo giờ"
                      placeholder="Tiền lương theo giờ..."
                      type="number"
                    />
                  </div>
                  <div className="mb-6">
                    <Address
                      address={values['address']}
                      setAddress={(value: string) => {
                        setFieldValue('address', value);
                      }}
                    />
                  </div>
                  <div className="mb-6">
                    <FastField
                      component={TextareaField}
                      name="content"
                      title="Nội dung"
                      placeholder="Nội dung bài viết..."
                      rows={6}
                    />
                  </div>
                </form>
                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                  <div className="block items-center py-2.5 px-4 text-xs font-medium text-center ">
                    {/* <label htmlFor="default" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category select</label> */}
                    <FastField
                      component={SelectField}
                      name="CategoryId"
                      placeholder={
                        categoryInfo.categoryList.find(
                          (item) => item._id === values.CategoryId
                        )?.name || 'Chọn loại công việc'
                      }
                      options={categoryInfo.categoryList.map((item, index) => ({
                        value: item._id,
                        label: item.name,
                      }))}
                      className=" w-[130px]"
                    />
                  </div>
                  <div className="flex pl-0 space-x-1 sm:pl-2">
                    <button
                      type="button"
                      className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <RiAttachment2 size={26} />
                      <span className="sr-only">Attach file</span>
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                    >
                      <HiLocationMarker size={26} />
                      <span className="sr-only">Set location</span>
                    </button>
                    <FastField
                      component={InputFileField}
                      name="image"
                      placeholder=""
                      inputClassName="px-2"
                      classname="text-gray-500"
                      onChange={(images: FileList) => {
                        setImage([...images]);
                      }}
                    />
                  </div>
                </div>
                {image.length !== 0 && (
                  <div className="flex items-center gap-4">
                    {image.map((item,index) => {
                      return (
                        <div className="relative">
                          <img
                            src={
                              typeof image === 'string'
                                ? image
                                : URL.createObjectURL(item)
                            }
                            alt="Selected"
                            style={{ height: 'auto', width: 'max-content' }}
                          />
                          <button
                            className="absolute bg-red-500 text-white rounded-full top-0 right-0"
                            type="button"
                            // onClick={()=>{
                            //   const 
                            //   setFieldValue("image",values.image.item(index))
                            // }}
                          >
                            <IoMdClose />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}

                <button
                  className="rounded-full flex content-center justify-center w-2/3 p-2 mt-10 mb-6 mx-auto space-x-4 border  dark:border-gray-400 bg-green-300 hover:bg-green-600"
                  type="submit"
                >
                  <p>Post</p>
                </button>
              </Form>
            );
          }}
        </Formik>
      </body>
    </div>
  );
}

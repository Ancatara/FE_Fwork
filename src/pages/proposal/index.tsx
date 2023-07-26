// ProposalForm.tsx
import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Header from 'components/layout/header';
import Item from 'components/pageComponent/Item';
import { Button } from 'components/pageComponent/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getPostDetailInfo } from 'features/post/postSlice';
import Loading from 'components/pageComponent/loading/Loading';
import Error from 'components/common/Error';
import moment from 'moment';
import { numberToMoney } from 'utils/common';
import { axiosRequest } from 'utils/axiosRequest';
import { toast } from 'react-toastify';

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Tên không được để trống !'),
  email: Yup.string()
    .email('Email không đúng định dạng')
    .required('Email không được để trống !'),
  message: Yup.string(),
});

interface ItemProps {}

const Proposal: React.FC<ItemProps> = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const postInfo = useAppSelector((state) => state.post);
  const userInfo = useAppSelector((state) => state.login);
  const handleSubmit = async (values: any) => {
    const newValue = {
      PostId:params.postId,
      description:values.message
    }
    try {
      const response = await axiosRequest({
        method: 'POST',
        url: '/proposal',
        data: newValue,
      });
      toast.success(response.message);
      navigate(`/post/${params.postId}/proposal/${response.data._id}`);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    dispatch({
      type: getPostDetailInfo().type,
      payload: params.postId,
    });
  }, []);
  return (
    <div className=" mt-32">
      {postInfo.isLoading ? (
        <Loading />
      ) : postInfo.error ? (
        <Error message={postInfo.error} />
      ) : (
        <div className="bg-white w-full h-full p-4 rounded-lg shadow-lg overflow-y-auto">
          <Button variant="outline" href="/findWork">
            Quay lại
          </Button>
          <h2 className="flex justify-center items-center uppercase font-mono text-xl">
            Mô tả công việc
          </h2>
          <div className="mx-5 mt-5 bg-white font-mono">
            <div className="grid grid-cols-3 gap-5 border border-gray-300 rounded-lg">
              <div className="col-span-2 p-4">
                <div className="flex items-center w-full h-auto flex-wrap gap-2">
                  {postInfo.postDetail?.image ? (
                    JSON.parse(postInfo.postDetail.image).map(
                      (item: string,index:number) => (
                        <div className="rounded-lg overflow-hidden w-[48%]" key={index}>
                          <img
                            alt={postInfo.postDetail?.title}
                            src={`${process.env.REACT_APP_BACKEND_URL}/files/${item}`}
                          />
                        </div>
                      )
                    )
                  ) : (
                    <></>
                  )}
                </div>
                <h2 className="text-2xl text-blue-600 font-bold mb-4">
                  {postInfo.postDetail?.title}
                </h2>
                <h2 className="text-xl font-bold mb-4">
                  {postInfo.postDetail?.Category.name}
                </h2>
                <div className="my-2 flex items-center justify-between gap-2">
                  <span className="flex-3 font-bold">Trạng thái:</span>
                  <span className="font-bold flex-1 text-green-600">
                    {postInfo.postDetail?.status}
                  </span>
                </div>
                <div className="flex ">
                  <span className="font-bold">Địa chỉ:</span>
                  <p className="text-gray-600 mb-4 ml-2">
                    {postInfo.postDetail?.address}
                  </p>
                </div>
                <div className="gap-3 border border-gray-300 p-2 rounded-lg">
                  <div className="pb-3">
                    <span className="font-bold">Yêu cầu:</span>
                  </div>
                  <p>{postInfo.postDetail?.content}</p>
                </div>

                <div className="border border-gray-300 gap-2 mt-4 rounded-lg">
                  <div className="p-2 ">
                    <span className="font-bold">Kinh nghiệm làm việc: </span>
                    <p>Không yêu cầu</p>
                  </div>
                  <div className="mt-4  p-2 ">
                    <span className="font-bold">Mức lương theo giờ: </span>
                    <p>{numberToMoney(postInfo.postDetail?.salary)} / giờ</p>
                  </div>
                  <div className="mt-4  p-2 ">
                    <span className="font-bold">Ngày bắt đầu: </span>
                    <p>
                      {moment(postInfo.postDetail?.startDate).format(
                        'DD/MM/YYYY'
                      )}
                    </p>
                  </div>
                </div>
                {userInfo.profile ? (
                  <Formik
                    initialValues={{
                      name: userInfo.profile.firstName+" "+userInfo.profile.lastName,
                      email:userInfo.profile.email,
                      message: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    <Form className="mx-auto bg-white p-6 shadow-md rounded-md mt-4 font-mono">
                      <div className="mb-4">
                        <label htmlFor="name" className="block font-bold mb-1">
                          Tên
                        </label>
                        <Field
                          type="text"
                          name="name"
                          id="name"
                          className="w-full border rounded p-2"
                          placeholder="Your Name"
                          disabled
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block font-bold mb-1">
                          Email
                        </label>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          className="w-full border rounded p-2"
                          placeholder="Your Email"
                          disabled
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                      {/* <div className="mb-4">
                        <label htmlFor="price" className="block font-bold mb-1">
                          Mức lương yêu cầu
                        </label>
                        <Field
                          type="number"
                          name="price"
                          id="price"
                          className="w-full border rounded p-2"
                          placeholder="Proposed Price"
                        />
                        <ErrorMessage
                          name="price"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="time" className="block font-bold mb-1">
                          Thời gian hoàn thành
                        </label>
                        <Field
                          type="text"
                          name="time"
                          id="time"
                          className="w-full border rounded p-2"
                          placeholder="Estimated Time"
                        />
                        <ErrorMessage
                          name="time"
                          component="div"
                          className="text-red-600"
                        />
                      </div> */}
                      <div className="mb-4">
                        <label
                          htmlFor="message"
                          className="block font-bold mb-1"
                        >
                          Lời nhắn
                        </label>
                        <Field
                          as="textarea"
                          name="message"
                          id="message"
                          className="w-full border rounded p-2"
                          placeholder="Your Message"
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="text-red-600"
                        />
                      </div>
                      <div className="flex justify-center">
                        <Button variant="success" type="submit">
                          Nộp hồ sơ
                        </Button>
                      </div>
                    </Form>
                  </Formik>
                ) : (
                  <></>
                )}
              </div>
              <div className="col-span-1 p-4 flex flex-col border-l border-gray-300">
                <div className="mt-20 border-t border-gray-300">
                  <span className="font-bold -2">
                    Thông tin người tuyển dụng
                  </span>
                  <div className="flex flex-col mt-6">
                    <span className="font-bold">Người đăng tuyển:</span>
                    <span>
                      {postInfo.postDetail?.User.firstName +
                        ' ' +
                        postInfo.postDetail?.User.lastName}
                    </span>
                  </div>
                  <div className="flex flex-col mt-6">
                    <span className="font-bold">Địa điểm:</span>
                    {/* <span>{address}</span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Proposal;

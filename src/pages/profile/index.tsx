import { getUserProfile, updateUserProfile } from 'api/userProfile.api'
import Header from 'components/layout/header'
import React, { useEffect, useState } from 'react'
import Footer from 'components/layout/footer'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { getUserInfo } from 'features/login/loginSlide'
import { Link } from 'react-router-dom'
import MyModal from 'components/pageComponent/Modal/MyModal';

type Profile = {
  is_public: boolean;
  status: string
};

const Profile = () => {
  // const { profile } = useAppSelector(state => state.login)
  // const [showModal, setShowModal] = useState(false);
  // const [exp, setExp] = useState('')
  // const [isStatus, setIsStatus] = useState('')
  // const [isPublic, setIsPublic] = useState<Partial<boolean>>(profile.is_public === 'false');
  // const [image, setImage] = useState("")
  // const [status, setStatus] = useState<string>('');
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [imgCrop, setImgCrop] = useState(false)
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   getUserProfile()
  //     .then((res) => {
  //       console.log((res.data as any).data);

  //       if ((res.data as any).data) {
  //         dispatch({ type: getUserInfo((res.data as any).data.data).type, payload: (res.data as any).data.data })
  //       }
  //     }
  //     )
  //     .catch((error) => {
  //       console.log("Error fetching user data:", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (profile.experience === 'less_than_1_year') {
  //     return setExp("Có ít hơn một năm kinh nghiệm.")
  //   }
  //   else if (profile.experience === 'one_to_two_year') {
  //     return setExp("Có một đến hai năm kinh nghiệm.")
  //   }
  //   else if (profile.experience === 'two_to_three_year') {
  //     return setExp("Có hai đến ba năm kinh nghiệm")
  //   }
  //   else if (profile.experience === 'more_than_three_year') {
  //     return setExp("Có hơn ba năm kinh nghiệm.")
  //   }
  //   else { return setExp("Chưa có kinh nghiệm làm việc.") }

  // }, [])

  // useEffect(() => {
  //   console.log(profile.status);
    
  //   if (profile.status === 'not_available') {
  //     return setIsStatus("Trạng thái")
  //   }
  //   else if (profile.status === 'available') {
  //     return setIsStatus("Rảnh")
  //   }
  //   else if (profile.status === 'busy') {
  //     return setIsStatus("Bận")
  //   }
  // }, [profile.status])
  


  // const openModal = () => {
  //   setShowModal(true);
  // };

  // const closeModal = () => {
  //   setShowModal(false);
  // };


  // const handleModalOpen = () => {
  //   setIsModalOpen(true);
  // };

  // const handleModalClose = () => {
  //   setIsModalOpen(false);
  // };

  // const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setStatus(e.target.value);
  // };

  // const handleSubmitStatus = async () => {
  //   try {
  //     const updatedProfile = {
  //       status: status,
  //     };
  
  //     await updateUserProfile(updatedProfile);
  //     console.log('Profile updated with status:', status);
  //   } catch (error) {
  //     console.log('Error updating profile:', error);
  //   }
  
  //   closeModal();
  // };

  // const handlePublicProfile = async () => {
  //   setIsPublic((prevIsPublic) => !prevIsPublic);
  
  // try {
  //   await updateUserProfile({ is_public: !isPublic });
  //   console.log('Profile updated with isPublic:', !isPublic);
  // } catch (error) {
  //   console.log('Error updating profile:', error);
  // }
    
  //   closeModal()
    
  // };
  
  // return (
  //   <>
  //     <Header />
  //     <div className=" mt-44 mb-10 pb-16 rounded-lg border-2 border-gray-200 p-1 sm:mx-auto sm:w-8/12 ">
  //       <div>
  //         {/* ///////////////////////////// */}
  //         <div className=" sm:w-full border-b-2 border-gray-200 flex-wrap-reverse gap-6 md:grid-cols-2">
  //           <div className="sm:w-1/2 inline-flex justify-start flex-wrap-reverse gap-6 md:grid-cols-2 ">
  //             <div className=" min-h-[140px] place-items-center overflow-x-scroll rounded-lg py-8 pl-5  lg:overflow-visible ">
  //               <img
  //                 className=" inline-block h-20 w-20 rounded-full object-cover object-left"
  //                 alt="Image placeholder"
  //                 src="https://www.material-tailwind.com/img/face-2.jpg"
  //               />
  //             </div>
  //             <div className="pt-7 ml-2" >
  //               <h2 className="decoration-solid font-bold text-xl">
  //                 {profile.firstName}{" "}{profile.lastName}
  //               </h2>
  //               <h6 className="decoration-solid">{profile.address}</h6>
  //               <div className="inline-flex">
  //                 <Link to="/editProfile" state={{ profile }} className="decoration-solid bg-green-200 rounded-full py-2 px-4 mr-2"
  //                 >
  //                   Chỉnh sửa thông tin
  //                 </Link>
  //                 <>
  //                   <button
  //                     className="bg-green-200 text-black active:bg-blue-500 
  //                     px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none "
  //                     type="button"
  //                     onClick={openModal}
  //                   >
  //                     {isStatus}
  //                   </button>
  //                   {showModal && (
  //                     <>
  //                       <div className=" flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
  //                         <div className="relative sm:w-1/3 my-6 mx-auto max-w-3xl">
  //                           <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
  //                             <div className=" flex justify-center p-5 border-b border-solid border-gray-300 rounded-t ">
  //                               <h3 className=" text-3xl font-bold text-green-800">
  //                                 Thay đổi trạng thái.
  //                               </h3>
  //                             </div>
  //                             <div className="relative p-6 flex-auto">
  //                               <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
  //                                 <div className="flex items-center mb-4">
  //                                   <input
  //                                     id="country-option-1"
  //                                     type="radio"
  //                                     value="available"
  //                                     className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
  //                                     checked={status === 'available'}
  //                                     onChange={handleChangeStatus}
  //                                   />
  //                                   <label
  //                                     htmlFor="country-option-1"
  //                                     className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  //                                   >
  //                                     Rảnh
  //                                   </label>
  //                                 </div>

  //                                 <div className="flex items-center mb-4">
  //                                   <input
  //                                     id="country-option-2"
  //                                     type="radio"
  //                                     value="busy"
  //                                     className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
  //                                     onChange={handleChangeStatus}
  //                                     checked={status === 'busy'}
  //                                   />
  //                                   <label
  //                                     htmlFor="country-option-2"
  //                                     className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  //                                   >
  //                                     Bận
  //                                   </label>
  //                                 </div>
  //                               </form>
  //                             </div>
  //                             <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">

  //                               <button
  //                                 className="text-white bg-green-400 active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
  //                                 type="button"
  //                                 onClick={handleSubmitStatus}
  //                               >
  //                                 Submit
  //                               </button>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </>
  //                   )}
  //                 </>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="sm:w-1/2 inline-flex justify-center flex-wrap-reverse gap-6 md:grid-cols-2">
  //             <button className="decoration-solid text-green-800 px-12 py-4 m-auto rounded-full border-2 border-green-700 "
  //               onClick={handleModalOpen}
  //             >
  //               Pulic Profile
  //             </button>
  //             <MyModal
  //               isOpen={isModalOpen}
  //               onRequestClose={closeModal}
  //               contentLabel="Example Modal"
  //             >
  //                 <h2 className='inline-flex text-blue-600 text-xl'>Bạn có muốn cho nhà tuyển dụng xem thông tin của bạn không?</h2>
  //                 <p className='mt-10 text-lg'>Thông tin cá nhân của bạn sẽ được công khai đến nhà tuyển dụng. </p>
  //                 <div className='flex justify-around text-center mt-16'>
  //                   <button className="decoration-solid bg-white text-black px-12 py-4 rounded-full border-2"
  //                     onClick={handleModalClose}
  //                   >
  //                     Hủy Bỏ
  //                   </button>
  //                   <button className="decoration-solid bg-green-500 text-white px-12 py-4 rounded-full border-2"
  //                     onClick={handlePublicProfile}
  //                   >
  //                     Đồng ý
  //                   </button>
  //               </div>
  //             </MyModal>
  //             <button className="decoration-solid bg-green-500 text-white px-12 py-4 m-auto rounded-full border-2 border-gray-400">
  //               Desposit
  //             </button>
  //           </div>
  //         </div>
  //         {/* //////////////////////////////////// */}
  //         <div className=" w-full inline-flex" >
  //           <div className="w-1/3 ml-6 border-r-2 border-gray-200 flex-wrap-reverse gap-6 md:grid-cols-2">
  //             <div className="my-12 inline-flex">
  //               <h2 className="text-black decoration-solid font-bold text-xl	">
  //                 Video introduction
  //               </h2>
  //             </div>
  //             <div>
  //               <div className="my-12">
  //                 <div className="inline-flex">
  //                   <h2 className="text-black decoration-solid font-bold text-xl	">
  //                     Lương theo giờ
  //                   </h2>
  //                 </div>
  //                 {/* <p>Less than 30 hrs/week</p> */}
  //                 <p className="text-gray-500">
  //                   Thu nhập: {profile.salary}$/giờ
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //           {/* //////////////////////////// */}

  //           <div className="w-2/3 flex-wrap-reverse gap-6 md:grid-cols-2 ">
  //             <div className="border-b-2 border-gray-200">
  //               <div className="flex flex-wrap-reverse gap-6 md:grid-cols-2">
  //                 <div className="inline-flex p-6 w-1/2 ">
  //                   <h1 className="text-black decoration-solid font-bold text-2xl justify-center">
  //                     Mô tả bản thân
  //                   </h1>
  //                 </div>
  //               </div>
  //               <div className="inline-flex m-6 ">
  //                 <p>
  //                   {profile.content}
  //                 </p>
  //               </div>
  //             </div>
  //             <div className=" border-b-2 border-gray-200 ">
  //               <div className="m-6 flex flex-wrap-reverse gap-6 md:grid-cols-2">
  //                 <h2 className="text-black decoration-solid font-bold text-xl	">
  //                   Kinh nghiệm làm việc
  //                 </h2>
  //               </div>
  //               <p className="m-6">
  //                 {exp}
  //               </p>
  //             </div>
  //             <div className="m-6">
  //               <h2 className="text-black decoration-solid font-bold text-xl flex-wrap-reverse gap-6 md:grid-cols-2	">
  //                 Thông tin liên hệ
  //               </h2>
  //               <div className='flex flex-col'>
  //                 <div className="flex md:grid-cols-2">
  //                   <p className="text-black font-bold p-4">Số điện thoại: </p>
  //                   <p className="p-4">{profile.phone}</p>
  //                 </div>
  //                 <div className="flex md:grid-cols-2">
  //                   <p className="text-black font-bold p-4">Email: </p>
  //                   <p className="p-4 ">{profile.email}</p>
  //                 </div>
  //                 <div className="flex md:grid-cols-2">
  //                   <p className="text-black font-bold p-4">Địa chỉ: </p>
  //                   <p className="p-4">{profile.address}</p>
  //                 </div>
  //               </div>

  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <Footer />
  //   </>
  // )
  return (<></>)
}

export default Profile
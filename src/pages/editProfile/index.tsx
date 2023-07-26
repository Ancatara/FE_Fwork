import { getCategory, getUserProfile, updateUserProfile } from 'api/userProfile.api';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import Footer from 'components/layout/footer';
import Header from 'components/layout/header';
import { getCategoryList, getUpdateUserInfo, getUserInfo } from 'features/login/loginSlide';
import { UserInfo, UserInfoUpdate, profileUpdate } from 'interfaces';
import * as React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { UserInfos as UserType } from 'interfaces'
import axios from 'axios';
export interface EditProfilePageProps {
  profile: UserInfoUpdate;

}


export default function EditProfilePage(props: EditProfilePageProps) {
  // const { profile } = useAppSelector(state => state.login)
  // const categoryInfo = useAppSelector(state => state.login)
  // const dispatch = useAppDispatch()
  // const navigate = useNavigate()
  // const [loading, setIsLoading] = useState(false)

  // const [formValues, setFormValues] = useState<Partial<UserInfo>>({
  //   firstName: profile.firstName || "",
  //   lastName: profile.lastName || "",
  //   gender: profile.gender || "",
  //   phone: profile.phone || "",
  //   address: profile.address || "",
  //   birthday: profile.birthday || "",
  //   CategoryId: profile.CategoryId || "",
  //   experience: profile.experience || "",
  //   description: profile.description || "",

  // });


  // useEffect(() => {
  //   getUserProfile()
  //     .then((res) => {
  //       // console.log("profile",(res.data as any).data);

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
  //   getCategory()
  //     .then((res) => {
  //       console.log("category", (res.data as any).data);

  //       if ((res.data as any).data) {
  //         dispatch({ type: getCategoryList((res.data as any).data.data).type, payload: (res.data as any).data.data })
  //       }
  //     }
  //     )
  //     .catch((error) => {
  //       console.log("Error fetching user data:", error);
  //     });
  // }, []);

  // const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setFormValues({ ...formValues, CategoryId: e.target.value });
  // };
  // const handleChangeExp = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setFormValues({ ...formValues, experience: e.target.value });

  // };

  // const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   await updateUserProfile(formValues); // Use formValues instead of profile
  //   // dispatch(getUpdateUserInfo(formValues)); // Use formValues instead of profile
  //   console.log('Profile updated:', formValues);
  //   navigate('/profile');
  // };


  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   const { name, value } = e.target;
  //   let updatedValue: string | boolean = value;

  //   if (name === 'gender') {
  //     updatedValue = value === '0';
  //   }


  //   setFormValues((prevValues) => ({
  //     ...prevValues,
  //     [name]: updatedValue,
  //   }));
  //   console.log('edit:', formValues);
  // };

  // return (
  //   <div>
  //     <Header />
  //     <body className="mx-auto mt-40 mb-10 pb-16 rounded-lg border-2 border-green-600 p-1 w-7/12">
  //       <div className="">
  //         <h4 className="flex content-center justify-center my-8 text-4xl text-green-700">
  //           MY PROFILE
  //         </h4>
  //       </div>

  //       <form className="mx-auto w-2/3" onSubmit={handleSave}>
  //         <div className="grid gap-6 mb-6 md:grid-cols-2">
  //           <div>
  //             <label
  //               htmlFor="first_name"
  //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //             >
  //               First name
  //             </label>
  //             <input
  //               type="text"
  //               id="first_name"
  //               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //               required
  //               name='firstName'
  //               value={formValues.firstName}
  //               onChange={handleInputChange}
  //             >
  //             </input>
  //           </div>
  //           <div>
  //             <label
  //               htmlFor="last_name"
  //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //             >
  //               Last name
  //             </label>
  //             <input
  //               name='lastName'
  //               type="text"
  //               id="last_name"
  //               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //               required
  //               value={formValues.lastName}
  //               onChange={handleInputChange}
  //             />
  //           </div>
  //         </div>
  //         <div className="grid gap-6 mb-6 md:grid-cols-2">
  //           <div>
  //             <label
  //               htmlFor="birthday"
  //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //             >
  //               Birthday
  //             </label>
  //             <input
  //               type="date"
  //               name='birthday'
  //               id="birthday"
  //               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //               placeholder="dd/mm/yy"
  //               value={formValues.birthday}
  //               onChange={handleInputChange}
  //             />
  //           </div>
  //           <div>

  //             <label
  //               htmlFor="gender"
  //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //             >
  //               Gender
  //             </label>
  //             <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //               name="gender"
  //               value={formValues.gender ? '0' : '1'}
  //               onChange={handleInputChange}
  //             >
  //               <option selected>Other</option>
  //               <option value='1'>Male</option>
  //               <option value='0'>Female</option>
  //             </select>
  //           </div>
  //         </div>
  //         <div className="mb-6">
  //           <label
  //             htmlFor="phone"
  //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //           >
  //             Phone number
  //           </label>
  //           <input
  //             type="tel"
  //             name="phone"
  //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //             placeholder="123-45-678"
  //             // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
  //             value={formValues.phone}
  //             onChange={handleInputChange}
  //           />
  //         </div>
  //         <div className="mb-6">
  //           <label
  //             htmlFor="email"
  //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //           >
  //             Email address
  //           </label>
  //           <input
  //             type="email"
  //             name="email"
  //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //             placeholder="john.doe@company.com"
  //             value={profile.email}
  //           />
  //         </div>
  //         <div className="mb-6">
  //           <label
  //             htmlFor="address"
  //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //           >
  //             Address
  //           </label>
  //           <input
  //             type="address"
  //             name="address"
  //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //             value={formValues.address}
  //             onChange={handleInputChange}
  //           />
  //         </div>
  //         <div className="mb-6">
  //           <label
  //             htmlFor="salary"
  //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //           >
  //             Salary per hour
  //           </label>
  //           <input
  //             name="salary"
  //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //             placeholder="5$"
  //             value={formValues.salary}
  //             onChange={handleInputChange}
  //           />
  //         </div>
  //         <div className="mb-6">
  //           <label
  //             htmlFor="descriptoion"
  //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //           >
  //             Description
  //           </label>
  //           <textarea
  //             name="description"
  //             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //             placeholder="something"
  //             value={formValues.description}
  //             onChange={handleInputChange}
  //           />
  //         </div>
  //         <div className='mb-6'>
  //           <label
  //             htmlFor="experience"
  //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //           >
  //             Experience
  //           </label>
  //           <div className="block items-center text-xs font-medium text-center ">
  //             <select value={formValues.experience} onChange={handleChangeExp} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  //               <option selected>Choose a experience:</option>
  //               <option value='less_than_1_year'>One Year</option>
  //               <option value='one_to_two_year'>Two Years</option>
  //               <option value='two_to_three_year'>Three Years</option>
  //               <option value='more_than_three_year'>More Three Years</option>
  //             </select>
  //           </div>
  //         </div>
  //         <div className='mb-6'>
  //           <label
  //             htmlFor="experience"
  //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //           >
  //             Category
  //           </label>
  //           <div className="block items-center text-xs font-medium text-center ">
  //             {/* <label htmlFor="default" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category select</label> */}
  //             <select id="default" value={formValues.CategoryId} onChange={handleCategoryChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  //               <option selected>Choose a Category</option>
  //               {
  //                 categoryInfo.categoryList.map((item, index) => (
  //                   <option key={index} value={item._id}>{item.name}</option>
  //                 ))
  //               }
  //             </select>
  //           </div>
  //         </div>

  //         <div className="mb-6">
  //           <label
  //             htmlFor="role"
  //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //           >
  //             Role
  //           </label>
  //           <input
  //             id="role"
  //             className="bg-gray-300 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //             value={profile.role}
  //             disabled
  //           />
  //         </div>

  //         <button className="rounded-full flex content-center justify-center w-2/3 p-2 mt-10 mb-6 mx-auto space-x-4 border  dark:border-gray-400 bg-green-300 hover:bg-green-600"
  //         // onClick={handleSave}
  //         >
  //           <p>Update</p>
  //         </button>
  //       </form>

  //     </body>

  //     <Footer />
  //   </div>
  // );
  return (<></>)
}
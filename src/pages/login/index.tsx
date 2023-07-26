import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ILogin, UserInfo } from '../../interfaces/index'
import factories from 'features/login/factories';
import Loading from 'components/pageComponent/loading/Loading';

export interface LoginPageProps {
}


export default function LoginPage(props: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')


  const UserInfo: ILogin = {
    email,
    password
    // Other user data fields
  };

  const handleLogin = async () => {

    const loginData: ILogin = {
      email,
      password,
    };
    if(!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))){
      loginData.phone = email
      delete loginData.email
    }
   
    try {
      const response = await factories.requestLogin(loginData);
      // console.log({response:response.data.data.data});
      console.log('role:',response.data.data.data.Info.role);
      localStorage.setItem("access_token", `Bearer ${response.data.data.data.token}`) 
      localStorage.setItem("user_id", response.data.data.data.Info._id) 
      if(response.data.data.data.Info.role === 'customer'){
        console.log('role1:',response.data.data.data.Info.role);
        navigate('/customerHomePage')
      }else if(response.data.data.data.Info.role === 'worker'){
        navigate('/')
      } else if(response.data.data.data.Info.role === 'admin'){
        navigate('/')
      }
      setIsLoading(false);
    } catch (error) {
      // Handle the error
      setIsLoading(false);
      setError("Email or password is incorrect!")
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
      setTimeout(() => {
        handleLogin();
      }, 500)
  };



  return (
    <>
    {isLoading && <Loading/>}   
    <div className= {isLoading ? "opacity-25 pointer-events-none": "min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 mt-12"}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Đăng nhập đến Fwork</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Hoặc
          <Link to="/register" className="font-medium text-green-600 hover:text-green-500 ml-1">
            tạo tài khoảng mới
          </Link>
        </p>
      </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                 Email hoặc Số điện thoại
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => { setEmail(e.target.value) }}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Mật khẩu
                </label>
                <div className="mt-1">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Lưu mật khẩu
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-green-600 hover:text-indigo-500">
                  Bạn quên mật khẩu?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-400 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Đăng nhập
              </button>
              {error && <p className='text-sm text-red-600 mt-1'>{error}</p>}
            </div>
          </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Hoặc tiếp tục với</span>
                </div>
              </div>

            <div className="mt-6 grid grid-cols-2 gap-2">
              <div>
                <button
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-green-100"
                >
                  <span className="sr-only">Đăng nhập bằng Google</span>
                  <FaGoogle color='primary' fontSize={20}/>
                </button>
              </div>

              <div>
                <button
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-green-100"
                >
                  <span className="sr-only">Đăng nhập bằng Facebook</span>
                  <FaFacebook fontSize={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

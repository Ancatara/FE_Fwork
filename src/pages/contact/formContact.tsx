import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const FormContact = () => {
  return (
    <div className="w-3/4 flex m-auto mt-32 bg-gray-100 p-10 rounded-2xl mb-10">
            <div className="w-1/2">
              <p className="text-center font-bold text-2xl">Gửi phản hồi</p>

              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-4 px-2 shadow sm:rounded-lg sm:px-5">
                  <form className="space-y-3" action="#" method="POST">
                    <div className="mb-6">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Họ tên
                      </label>
                      <input
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nguyen Van A"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="phone"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="123-45-678"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="john.doe@company.com"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Thông tin góp ý
                      </label>
                      <textarea
                        id="content"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="hmmmmmm"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="rounded-full flex content-center justify-center w-2/3 p-2 mt-10 mb-6 mx-auto space-x-3 border  dark:border-gray-400 bg-blue-300 hover:bg-blue-600 hover:text-white"
                    >
                      <p>Gửi</p>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="w-1/2 justify-items-end">
              <p className="text-center font-bold text-2xl">Liên hệ</p>
              <div className="py-5 px-10 font-bold">
                <span className='text-xl flex text-center items-center gap-3'>
                <MdEmail/> 
                  Địa chỉ Email:
                </span>
                <span className='text-xl font-thin font-serif ml-8'>
                  fworksupport@gmail.com
                </span>
                <span className='text-xl flex text-center items-center gap-3 mt-4'>
                <FaPhone />
                  Điện thoại hỗ trợ:
                </span>
                <span className='text-xl font-thin font-serif ml-8'>
                0321456987
                </span>
              </div>
            </div>
          </div>
  )
}

export default FormContact
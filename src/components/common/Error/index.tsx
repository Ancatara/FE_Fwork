import * as React from 'react';
import { Link } from 'react-router-dom';

export interface  ErrorProps {
  message?:string
}

export default function Error ({message="Đã xãy ra lỗi!"}:  ErrorProps) {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-y-1 py-2'>
      <img alt='error image' src='/image/icons-error.png'/>
      <div className='flex justify-center items-center gap-x-2'>
        <h3 className='text-xl font-semibold '>
          {message}
        </h3>
        <Link to={"/"} className='text-xl font-semibold text-green-600 underline'>Quay về trang chủ</Link>
      </div>
    </div>
  );
}

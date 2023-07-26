import { Button } from 'components/pageComponent/Button/Button';
import { useEffect, useRef, useState } from 'react'
import icons from 'utils/icons/icon';

interface ItemDetailDialogProps {
  CategoryId: string;
  address: string;
  content: string;
  title: string
  status: string
}

const { FaArrowLeft } = icons

const ManagePostDetail: React.FC<ItemDetailDialogProps> = ({
  CategoryId,
  address,
  content,
  title,
  status
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const currentPageLink = window.location.href;
  const handleCopyLink = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigator.clipboard.writeText(currentPageLink)
      .then(() => alert('Link copied to clipboard!'))
      .catch((error) => console.error('Failed to copy link:', error));

      setIsCopied(true);
     
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); 
  };

  window.alert = () => {};

  return (
    // <div className="relative top-0 bottom-0 flex items-center justify-end bg-black bg-opacity-20 z-30">
      <div className="bg-white w-full h-full p-4 rounded-lg shadow-lg overflow-y-auto mt-28">
        <h1>Mô tả công việc</h1>
        <div className='mx-5 mt-5 bg-gray-100'>
          <div className='grid grid-cols-3 gap-5 border border-gray-300 rounded-lg'>
            <div className='col-span-2 p-4'  >
              <h2 className="text-2xl text-blue-600 font-bold mb-4">{title}</h2>
              <h2 className="text-xl font-bold mb-4">{CategoryId}</h2>
              <div className='my-2 flex items-center justify-between gap-2'>
                    <span className='flex-3 font-bold'>Trạng thái:</span>
                    <span className='font-bold flex-1 text-green-600'>{status}</span>
                </div>
              <div className='flex '>
                <span className='font-bold'>Địa chỉ:</span>
                <p className="text-gray-600 mb-4 ml-2">{address}</p>
              </div>
              <div className='gap-3 border border-gray-300 p-2 rounded-lg'>
                <div className='pb-3'>

                  <span className='font-bold'>Mô tả công việc:</span>
                </div>
                <p>{content}</p>
              </div>

              <div className='border border-gray-300 gap-2 mt-4 rounded-lg'>

                <div className='p-2 '>
                  <span className='font-bold'>Kinh nghiệm làm việc: </span>
                  <p>Không yêu cầu</p>
                </div>
                <div className='mt-4  p-2 '>
                  <span className='font-bold'>Mức lương theo giờ: </span>
                  <p>20.000 / giờ</p>
                </div>
                <div className='mt-4  p-2 '>
                  <span className='font-bold'>Ngày bắt đầu: </span>
                  <p>26/08/2023</p>
                </div>
              </div>
            </div>
            <div className='col-span-1 p-4 flex flex-col border-l border-gray-300'  >

              <Button variant='success' href='/proposal'>Ứng tuyển</Button>
              <Button variant='outline' className='mt-4'>Lưu công việc</Button>
              
              <div className='mt-20 border-t border-gray-300'>
                <span className='font-bold -2'>Thông tin người tuyển dụng</span>
                <div className='flex flex-col mt-6'>
                  <span className='font-bold'>Người đăng tuyển:</span>
                  <span>Dương Chí Quốc</span>
                </div>
                <div className='flex flex-col mt-6'>
                  <span className='font-bold'>Địa điểm:</span>
                  <span>{address}</span>
                </div>
                <div className='flex flex-col mt-6'>
                  <span className='font-bold'>Link tuyển dụng:</span>
                  <a href={currentPageLink} target="_blank" rel="noopener noreferrer" className='select-none bg-slate-400 pointer-events-none cursor-none rounded-lg p-1'>
                    {currentPageLink}
                  </a>
                  <Button variant="link" className='mt-2' onClick={handleCopyLink}>Sao chép</Button>
                  {isCopied && <span className='text-gray-500' >Đã sao chép</span>}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    // </div>
  );
};

export default ManagePostDetail

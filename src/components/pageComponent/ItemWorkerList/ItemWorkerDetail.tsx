import { useEffect, useRef, useState } from 'react'
import icons from 'utils/icons/icon';
import { Button } from '../Button/Button';

interface ItemDetailDialogProps {
  CategoryId: string;
  address: string;
  content: string;
  name: string
  status: string
  onClose: () => void;
}

const { FaArrowLeft } = icons

const ItemDetailDialog: React.FC<ItemDetailDialogProps> = ({
  CategoryId,
  address,
  content,
  onClose,
  name,
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
    <div className="fixed top-0 bottom-0 flex items-center justify-end bg-black bg-opacity-20 z-30">
      <div className="bg-white w-2/3 h-full p-4 rounded-lg shadow-lg overflow-y-auto">
        <button
          onClick={onClose}
          className=" px-2 py-2 text-black rounded hover:bg-gray-300 cursor-pointer"
        >
          <FaArrowLeft size={30} />
        </button>
        <div className='mx-5 mt-5 bg-gray-100'>
          <div className='grid grid-cols-3 gap-5 border border-gray-300 rounded-lg'>
            <div className='col-span-2 p-4'  >
              <h2 className="text-2xl text-blue-600 font-bold mb-4">{name}</h2>
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

                  <span className='font-bold'>Giới thiệu bản thân:</span>
                </div>
                <p>{content}</p>
              </div>

              <div className='border border-gray-300 gap-2 mt-4 rounded-lg'>

                <div className='p-2 '>
                  <span className='font-bold'>Kinh nghiệm làm việc: </span>
                  <p>Dưới 1 năm kinh nghiệm</p>
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

              <Button variant='success'>Tuyển dụng</Button>
              <Button variant='outline' className='mt-4'>Yêu thích</Button>
              
              <div className='mt-20 border-t border-gray-300'>
                <span className='font-bold -2'>Thông tin ứng viên</span>
                <div className='flex flex-col mt-6'>
                  <span className='font-bold'>Tên</span>
                  <span>Dương Chí Quốc</span>
                </div>
                <div className='flex flex-col mt-6'>
                  <span className='font-bold'>Số điện thoại:</span>
                  <span>0865634354</span>
                </div>
                <div className='flex flex-col mt-6'>
                  <span className='font-bold'>Ngày sinh:</span>
                  <span>13/01/2001</span>
                </div>
                <div className='flex flex-col mt-6'>
                  <span className='font-bold'>Địa chỉ cụ thể:</span>
                  <span>{address}</span>
                </div>
                <div className='flex flex-col mt-6'>
                  <span className='font-bold'>Link ứng viên:</span>
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
    </div>
  );
};

export default ItemDetailDialog

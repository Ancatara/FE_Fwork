import React, { memo, useState, useRef, useEffect } from 'react'
import icons from '../../../utils/icons/icon'
import { useNavigate, Link } from 'react-router-dom'
import ItemWorkerDetail from './ItemWorkerDetail'
import { Button } from '../Button/Button';
import { Avatar } from '@mui/material';
// import { formatVietnameseToString } from '../ultils/Common/formatVietnameseToString'

interface WorkerProps {
    CategoryId: string;
    address: string;
    content: string;
    images: any,
    user: string, 
    title: string, 
    star: any, 
    status: any,
    name: any,
    phone: any
  }
  
const indexs = [0, 1, 2, 3]

const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill, CiLocationOn } = icons

const ItemWorker: React.FC<WorkerProps> = ({ CategoryId, address, content, user, images, star, status, title, name, phone })  => {
    const [isHoverHeart, setIsHoverHeart] = useState(false)
    const [showDialog, setShowDialog] = useState(false);
    const dialogRef = useRef<HTMLDivElement>(null);


    const handleClick = () => {
        setShowDialog(!showDialog);
    };

    const handleRec = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
    };

    const handleCall = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
    };

    const handleHeart = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setIsHoverHeart(true)
    };

    const handleCloseDialog = () => {
        setShowDialog(!showDialog);
        console.log("close",showDialog );
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
            handleCloseDialog();
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    


    const handleStar = (star:any) => {
        let stars = []
        for (let i = 1; i <= +star; i++) stars.push(<GrStar className='star-item' size={18} color='yellow' />)
        return stars

    }
    return (
        <>
        <div>
        <div className="w-full flex px-6 py-2 border cursor-pointer hover:bg-gray-100 hover:border-green-600 transition-colors duration-300 my-10 rounded-md"
            onClick={handleClick}
        >
            <div className='w-full'>
                <div className='flex'>

                    <div className='flex gap-4 w-full flex-row items-center'>
                        <Avatar
                            sx={{ width: 56, height: 56 }}
                            alt="Remy Sharp"
                            src="https://toigingiuvedep.vn/wp-content/uploads/2022/01/hinh-avatar-cute-nu.jpg"
                        />
                        <div className='flex px-2'>
                            {handleStar(+star).length > 0 && handleStar(+star).map((star, number) => {
                                return (
                                    <span key={number}>{star}</span>
                                )
                            })}
                            <div className='w-[10%] flex justify-end'>
                                {/* <BsBookmarkStarFill size={24} color='orange' /> */}
                            </div>
                        </div>
                    </div>
                    <span
                        className='text-red relative'
                        onMouseEnter={() => setIsHoverHeart(true)}
                        onMouseLeave={() => setIsHoverHeart(false)}
                        onClick={handleHeart}
                    >
                        {isHoverHeart ? <RiHeartFill size={26} color='red' /> : <RiHeartLine size={26} />}
                    </span>
                </div>


                <div className='inline-flex'>
                    <CiLocationOn size={24} />
                    <span className='flex-3 whitespace-nowrap overflow-hidden text-ellipsis'>
                        {`${address.split(',')[address.split(',').length - 2]}${address.split(',')[address.split(',').length - 1]}`}
                    </span>
                </div>
                <div className='my-2 flex items-center justify-between gap-2'>
                    <span className='flex-3'>Trạng thái:</span>
                    <span className='font-bold flex-1 text-green-600'>{status}</span>
                </div>
                <p className='text-gray-500 w-full h-[50px] text-ellipsis overflow-hidden'>
                    {content}
                </p>
                <span className='flex max-w-max bg-green-300 p-2 mt-2  rounded-2xl'>{CategoryId}</span>
                <div className='flex items-center my-5 justify-between'>
                        <Button size='sm' variant='destructive' onClick={handleCall}>
                        {`Gọi ${phone}`}
                        </Button>
                        <Button size='sm' variant='outline' onClick={handleRec}>
                            Thuê ngay
                        </Button>
                </div>
            </div>

        </div>
        </div>
            {showDialog && (
                <div ref={dialogRef}>

                <ItemWorkerDetail
                status={status}
                name={name}
                CategoryId={CategoryId}
                address={address}
                content={content}
                onClose={handleCloseDialog}
                />
                </div>
            )}
        </>
    )
}

export default memo(ItemWorker)
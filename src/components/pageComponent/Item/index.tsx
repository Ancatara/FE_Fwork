import React, { memo, useState, useRef, useEffect } from 'react'
import icons from '../../../utils/icons/icon'
import { useNavigate, Link } from 'react-router-dom'
import './item.css'
import ItemDetailDialog from './ItemDetail'
import { Button } from '../Button/Button'
// import { formatVietnameseToString } from '../ultils/Common/formatVietnameseToString'

interface ItemProps {
    CategoryId: string;
    address: string;
    content: string;
    images: any,
    user: string, 
    title: string, 
    star: any, 
    attributes: any,
    name: any,
    phone: any,
    status: string
  }
  
const indexs = [0, 1, 2, 3]

const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill, CiLocationOn } = icons

const Item: React.FC<ItemProps> = ({ CategoryId, address, content, images, star, title, name, phone, status })  => {
    const [isHoverHeart, setIsHoverHeart] = useState(false)
    const [showDialog, setShowDialog] = useState(false);
    const dialogRef = useRef<HTMLDivElement>(null);


    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        setShowDialog(!showDialog);
        // console.log("open", showDialog);
    };

    const handleApply = (e: React.MouseEvent<HTMLElement>) => {
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
        <div>
        <div className="w-full flex px-6 py-2 border-t cursor-pointer hover:bg-gray-100 hover:border-animate transition-colors duration-300"
            onClick={handleClick}
        >
            <Link
                to={""}
                className='w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer'
            >
                {/* {images.length > 0 && images.filter((i, index:any) => indexs.some(i => i === index))?.map((i, index) => {
                    return (
                        <img key={index} src={i} alt="preview" className='w-[47%] h-[120px] object-cover' />
                    )
                })} */}
                <span className='bg-overlay-70 text-white px-2 rounded-md absolute left-1 bottom-4'>{`${images.length} ảnh`}</span>

            </Link>
            <div className='w-3/5'>
                <div className='flex'>

                    <div className='flex gap-4 w-full flex-col'>
                        <div className='text-red-600 font-medium'>

                            {title}
                        </div>
                        <div className='flex'>
                            {handleStar(+star).length > 0 && handleStar(+star).map((star, number) => {
                                return (
                                    <span key={number}>{star}</span>
                                )
                            })}
                            <div className='w-[10%] flex justify-end'>
                                <BsBookmarkStarFill size={24} color='orange' />
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
                    <div className=' flex items-center'>
                        <img src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png" alt="avatar" className='w-[30px] h-[30px] object-cover rounded-full' />
                        <p>{name}</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Button variant='destructive' onClick={handleCall}>{`Gọi ${phone}`}</Button>
                        <Button variant='success' onClick={handleApply} href='/proposal'>Ứng tuyển</Button>
                    </div>
                </div>
            </div>

        </div>
            {showDialog && (
                <div ref={dialogRef}>
                <ItemDetailDialog
                status={status}
                title={title}
                CategoryId={CategoryId}
                address={address}
                content={content}
                onClose={handleCloseDialog}
                />
                </div>
            )}
        </div>
    )
}

export default memo(Item)
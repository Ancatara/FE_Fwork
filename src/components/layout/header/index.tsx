import Searching from 'components/pageComponent/Search/Searching';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { getBearerAccessToken, getUserIdLocalstorage } from 'utils/localStorage/LocalStorage';
import Logo from 'components/pageComponent/Logo';

export interface HeaderProps {
}

export default function Header(props: HeaderProps) {
  const [showDropdown, setShowDropdown]: any = useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);

  //dropdown Menu1
  const [isOpenMenu1, setIsOpenMenu1] = React.useState<null | HTMLElement>(null);
  const handleMenuCloseMenu1 = () => {
    setIsOpenMenu1(null);
  };
  const handleClickListItemMenu1 = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpenMenu1(event.currentTarget);
  };
  const onOpenMenu1 = Boolean(isOpenMenu1);
  //
  //dropdown Menu2
  const [isOpenMenu2, setIsOpenMenu2] = React.useState<null | HTMLElement>(null);
  const handleMenuCloseMenu2 = () => {
    setIsOpenMenu2(null);
  };
  const handleClickListItemMenu2 = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpenMenu2(event.currentTarget);
  };
  const onOpenMenu2 = Boolean(isOpenMenu2);
  //

  //dropdown Menu
  React.useState(1);
  const onOpen = Boolean(isOpen);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpen(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  //

  //dropdown avatar
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuClose = () => {
    setIsOpen(null);
  };


  const navigate = useNavigate()

  const isLogin = getUserIdLocalstorage() && getBearerAccessToken()

  const handleLogin = (setLoggedIn: any) => {
    setLoggedIn = true
  }

  const handleLogout = (setLoggedIn: any) => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("user_id")

    navigate('/')
  }

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setIsOpen(null);
  };



  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-10 " >
      <div className="container px-4 py-6 flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold">
          <Logo />
        </Link>
        <nav className="space-x-8 flex justify-between items-center">
          <List
            component="nav"
            aria-label="Device settings"
            sx={{ bgcolor: 'background.paper' }}
          >
            <ListItem
              aria-expanded={onOpen ? 'true' : undefined}
              onClick={handleClickListItem}
            >
              <span className='font-bold text-gray-700 hover:text-gray-900 cursor-pointer'>Tìm việc</span>
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={isOpen}
            open={onOpen}
            onClose={handleMenuClose}
          >
            <MenuItem className='flex flex-col '>
              <Link to="/findWork" className="text-gray-700 hover:text-gray-900">
                Danh sách công việc
              </Link>
            </MenuItem>
            <MenuItem className='flex flex-col '>
              <Link to="/saveWork" className="text-gray-700 hover:text-gray-900">
                Việc đã lưu
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/contractPage" className="text-gray-700 hover:text-gray-900">
                Hợp đồng của bạn
              </Link>
            </MenuItem>
          </Menu>
          <List
            sx={{ bgcolor: 'background.paper' }}
          >
            <ListItem
              aria-expanded={onOpenMenu1 ? 'true' : undefined}
              onClick={handleClickListItemMenu1}
            >
              <span className='font-bold text-gray-700 hover:text-gray-900 cursor-pointer'>
                Tìm người giúp việc
              </span>
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={isOpenMenu1}
            open={onOpenMenu1}
            onClose={handleMenuCloseMenu1}
            MenuListProps={{
              'aria-labelledby': 'lock-button',
              role: 'listbox',
            }}
          >
            <MenuItem className='flex flex-col '>
              <Link to="/find-worker" className="text-gray-700 hover:text-gray-900">
                Danh sách ứng viên
              </Link>
            </MenuItem>
            <MenuItem className='flex flex-col '>
              <Link to="/create-post" className="text-gray-700 hover:text-gray-900">
                Tạo bài viết
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/contractPage" className="text-gray-700 hover:text-gray-900">
                Hợp đồng của bạn
              </Link>
            </MenuItem>
          </Menu>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{ bgcolor: 'background.paper' }}
          >
            <ListItem
              aria-expanded={onOpenMenu2 ? 'true' : undefined}
              onClick={handleClickListItemMenu2}
            >
              <span className='font-bold text-gray-700 hover:text-gray-900 cursor-pointer'>
                Về Fwork
              </span>
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={isOpenMenu2}
            open={onOpenMenu2}
            onClose={handleMenuCloseMenu2}
            MenuListProps={{
              'aria-labelledby': 'lock-button',
              role: 'listbox',
            }}
          >
            <MenuItem className='flex flex-col '>
              <Link to="/about" className="text-gray-700 hover:text-gray-900">
                Giới thiệu
              </Link>
            </MenuItem>
            <MenuItem className='flex flex-col '>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">
                Liên hệ
              </Link>
            </MenuItem>
          </Menu>

          <Searching />
          {isLogin ? (
            <>
              <Box>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar sx={{ width: 50, height: 50 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    // overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar />
                  <Link to="/profile">Thông tin cá nhân</Link>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <Typography className="font-normal">
                    Giúp đỡ
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to='/editProfile' className="font-normal">
                    Chỉnh sửa thông tin
                  </Link>
                </MenuItem>
                <MenuItem>
                  <button onClick={handleLogout} className="font-normal text-red-600">
                    Đăng xuất
                  </button>
                </MenuItem>
              </Menu>

            </>
          ) : (
            <>
              <Link to="/register" className="text-gray-700 hover:text-gray-900">
                Đăng ký
              </Link>
              <Link to="/login" className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2">
                Đăng nhập
              </Link>
            </>
          )
          }
        </nav>
      </div>
    </header>
  );
}

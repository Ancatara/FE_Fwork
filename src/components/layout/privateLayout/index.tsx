import { ROUTES } from 'constants/router';
import React,{useEffect} from 'react';
import { Navigate, Outlet } from 'react-router';
import {
  getBearerAccessToken,
  getUserIdLocalstorage,
} from 'utils/localStorage/LocalStorage';
import Header from '../header';
import Footer from '../footer';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import Loading from 'components/pageComponent/loading/Loading';
import { getUserInfo } from 'features/login/loginSlide';

export interface PrivateLayoutProps {}

export default function PrivateLayout(props: PrivateLayoutProps) {
  const dispatch = useAppDispatch()
  const login = useAppSelector(state=>state.login)
  useEffect(()=>{
    dispatch(getUserInfo())
  },[])

  if(login.isLoading){
    return <Loading/>
  }
  if (getBearerAccessToken() && login.profile) {
    return (
      <div >
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  } else {
    return <Navigate to={ROUTES.LOGIN}></Navigate>;
  }
}

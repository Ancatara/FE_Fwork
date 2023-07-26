import { ROUTES } from 'constants/router';
import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getBearerAccessToken, getUserIdLocalstorage } from 'utils/localStorage/LocalStorage';

export interface  PublicRoute {
}

export default function PublicRoute (props:  PublicRoute) {
  // check if user logged in 
 if(getBearerAccessToken() && getUserIdLocalstorage()){
  return <Navigate to={ROUTES.HOME}></Navigate> 
 } else{
  return <Outlet />
 }
  
}

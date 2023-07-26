import { ROUTES } from 'constants/router';
import * as React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getBearerAccessToken, getUserIdLocalstorage } from 'utils/localStorage/LocalStorage';

export interface  PrivateRouteProps {
}

export default function PrivateRoute (props:  PrivateRouteProps) {
  // check if user logged in 
 if(getBearerAccessToken() && getUserIdLocalstorage()){
  return <Outlet /> 
 } else{
  return <Navigate to={ROUTES.LOGIN}></Navigate>
 }
  
}

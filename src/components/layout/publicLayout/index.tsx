import { useAppDispatch, useAppSelector } from 'app/hooks';
import Loading from 'components/pageComponent/loading/Loading';
import { getUserInfo } from 'features/login/loginSlide';
import { useEffect } from 'react';
import { Outlet } from 'react-router';
import {
  getBearerAccessToken
} from 'utils/localStorage/LocalStorage';
import Footer from '../footer';
import Header from '../header';

export interface PublicLayoutProps {}

export default function PublicLayout(props: PublicLayoutProps) {
  const dispatch = useAppDispatch();
  const login = useAppSelector((state) => state.login);
  const token = getBearerAccessToken()
  useEffect(() => {
    if(token){
      dispatch(getUserInfo());
    }
  }, []);

  if (login.isLoading && token) {
    return <Loading />;
  }
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

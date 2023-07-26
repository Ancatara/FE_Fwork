import PrivateLayout from "components/layout/privateLayout";
import PublicLayout from "components/layout/publicLayout";
import Loading from "components/pageComponent/loading/Loading";
import { ROUTES } from "constants/router";
import About from "pages/about";
import Contact from "pages/contact";
import ContractPage from "pages/contract/ContractPage";
import CreatePostPage from "pages/createPost";
import CustomerHomePage from "pages/customerHomePage";
import EditProfilePage from "pages/editProfile";
import FindWorkList from "pages/findWorkList";
import FindWorkerList from "pages/findWorkerList";
import HomePage from "pages/home";
import LoginPage from "pages/login";
import NotFoundPage from "pages/notFound";
import Profile from "pages/profile";
import Proposal from "pages/proposal";
import PostDetail from "pages/postDetail";
import { default as Register, default as RegisterPage } from "pages/register";
import ConfirmRole from "pages/register/ConfirmRole";
import { Route, Routes, useLocation } from "react-router-dom";
import ManagePostDetail from "pages/postDetail/postDetail";

export default function Router() {
  const location = useLocation();
  const { profile } = location.state || {};
  const { ItemProps } = location.state || {};
  const { WorkerProps } = location.state || {};

  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path={ROUTES.CUSTOMERHOMEPAGE} element={<CustomerHomePage />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.FIND_WORKER} element={<FindWorkerList />} />
        <Route path={ROUTES.CONTRACTPAGE} element={<ContractPage />} />
        <Route path={ROUTES.CREATE_POST} element={<CreatePostPage />} />
        <Route path={`post/:postId/${ROUTES.PROPOSAL}`} element={<Proposal />} />
        <Route path={ROUTES.EDITPROFILE} element={<EditProfilePage profile={profile} />} />
        <Route path={ROUTES.FINDWORK} element={<FindWorkList />} />
        <Route path='/findWork/:id' element={<ManagePostDetail {...ItemProps}/>} />
        <Route path={`${ROUTES.POST}/:postId`} element={<PostDetail />} />
      </Route>
      <Route element={<PublicLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.CONTACTPAGE} element={<Contact />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CONFIRMROLE} element={<ConfirmRole />} />
      </Route>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

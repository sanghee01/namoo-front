import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Nav from "./layouts/Nav";
import styled from "styled-components";
import Login from "./pages/Login";
import FindPassword from "./pages/FindPassword";
import RePassword from "./pages/Profile/RePassword";
import SignUp from "./pages/SignUp";
import Start from "./pages/Start";
import MyPlant from "./pages/Profile/MyPlant";
import AddPlant from "./pages/Profile/AddPlant";
import Setting from "./pages/Profile/Setting";
import Achievement from "./pages/Profile/Achievement";
import Encyclopedia from "./pages/Profile/Encyclopedia";
import { useRecoilValue } from "recoil";
import NotFoundPage from "./pages/NotFoundPage";
import ChangePassword from "./pages/FindPassword/ChangePassword";
import ReAuthMail from "./pages/ResendMail";
import LoginSuccess from "./pages/Login/LoginSuccess";
import ErrorPage from "./pages/Login/ErrorPage";
import DeleteMemeberPage from "./pages/Profile/DeleteMemberPage";
import { plantState } from "./state/plantState";
import CheckDisease from "./pages/Home/CheckDisease";
import { userState } from "./state/userState";

const Router = () => {
  const plant = useRecoilValue(plantState);
  const user = useRecoilValue(userState);

  return (
    <BrowserRouter>
      <Container>
        <Main>
          <Routes>
            {user ? (
              <>
                {/* 로그인 상태여야 접속할 수 있는 페이지 */}
                <Route path="/myplant" element={<MyPlant />} />
                <Route path="/repassword" element={<RePassword />} />
                <Route path="/delete-member" element={<DeleteMemeberPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/addplant" element={<AddPlant />} />
                <Route path="/setting" element={<Setting />} />
                {plant.name && (
                  <>
                    {/* 식물 선택 상태여야지 접속할 수 있는 페이지 */}
                    <Route path="/home" element={<Home />} />
                    <Route path="/chat" element={<Chat />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/achievement" element={<Achievement />} />
                    <Route path="/encyclopedia" element={<Encyclopedia />} />
                    <Route path="/check-disease" element={<CheckDisease />} />
                  </>
                )}
              </>
            ) : (
              <>
                {/* 로그인 상태가 아니어야 접속할 수 있는 페이지 */}
                <Route path="/" element={<Start />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/findpassword" element={<FindPassword />} />
                <Route path="/password/reset" element={<ChangePassword />} />
                <Route path="/resend-mail" element={<ReAuthMail />} />
                <Route path="/login-success" element={<LoginSuccess />} />
                <Route path="/error-page" element={<ErrorPage />} />
              </>
            )}
            {/* 존재하지 않는 페이지 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Main>
        <Footer>
          <Nav />
        </Footer>
      </Container>
    </BrowserRouter>
  );
};

export default Router;

const Container = styled.div`
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  overflow: hidden;
  width: 550px;
  height: 100dvh;
  margin: auto;
  overflow-y: scroll;
  background-color: white;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Main = styled.div`
  height: 90dvh;
  @media screen and (max-width: 600px) {
    height: 89dvh;
  }
`;

const Footer = styled.div`
  position: absolute;
  width: 550px;
  height: 10dvh;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 11dvh;
  }
`;

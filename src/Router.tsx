import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Nav from "./layouts/Nav";
import styled from "styled-components";
import SignIn from "./pages/SignIn";
import FindId from "./pages/SignIn/FindId";
import FindPassword from "./pages/SignIn/FindPassword";
import NeedActivate from "./pages/Profile/NeedActivate";
import RePassword from "./pages/Profile/RePassword";
import SignUp from "./pages/SignUp";
import Start from "./pages/Start";
import MyPlant from "./pages/Profile/MyPlant";
import AddPlant from "./pages/Profile/AddPlant";
import Setting from "./pages/Profile/Setting";
import Achievement from "./pages/Profile/Achievement";
import Encyclopedia from "./pages/Profile/Encyclopedia";
import { useRecoilValue } from "recoil";
import { userState } from "./state/atoms";

const Router = () => {
  const user = useRecoilValue(userState);

  return (
    <BrowserRouter>
      <Container>
        <Main>
          <Routes>
            {user ? (
              <>
                <Route path="/needactivate" element={<NeedActivate />} />
                <Route path="/findid" element={<FindId />} />
                <Route path="/findpassword" element={<FindPassword />} />
                <Route path="/repassword" element={<RePassword />} />
                <Route path="/home" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/history" element={<History />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/myplant" element={<MyPlant />} />
                <Route path="/addplant" element={<AddPlant />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/achievesment" element={<Achievement />} />
                <Route path="/encyclopedia" element={<Encyclopedia />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Start />} />
                <Route path="/login?" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </>
            )}
          </Routes>
        </Main>
        {/* 로그인 상태에만 Nav bar 보이도록 */}
        {user && (
          <Footer>
            <Nav />
          </Footer>
        )}
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
  background-color: white;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Main = styled.div`
  height: 100dvh;
`;

const Footer = styled.div`
  width: 550px;
  height: 95px;
  position: absolute;
  bottom: 0;
`;

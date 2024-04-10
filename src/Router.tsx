import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";
import styled from "styled-components";
import SignIn from "./pages/SignIn";
import FindId from "./pages/FindId";
import FindPassword from "./pages/FindPassword";
import NeedActivate from "./pages/NeedActivate";
import RePassword from "./pages/RePassword";
import SignUp from "./pages/SignUp";
import Start from "./pages/Start";
import MyPlant from "./pages/MyPlant";
import AddPlant from "./pages/AddPlant";
import Setting from "./pages/Setting";
import { useRecoilValue } from "recoil";
import { userState } from "./recoil/state";

const Router = () => {
  const user = useRecoilValue(userState);

  return (
    <BrowserRouter>
      <Container>
        <Main>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/needactivate" element={<NeedActivate />} />
            <Route path="/findid" element={<FindId />} />
            <Route path="/findpassword" element={<FindPassword />} />
            <Route path="/repassword" element={<RePassword />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/myplant" element={<MyPlant />} />
            <Route path="/addplant" element={<AddPlant />} />
            <Route path="/setting" element={<Setting />} />
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
  width: 550px;
  height: 100dvh;
  margin: auto;
  background-color: white;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Main = styled.div`
  height: 90%;
`;

const Footer = styled.div`
  height: 10%;
`;

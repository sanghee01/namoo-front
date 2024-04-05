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
import RePassword from "./pages/RePassword";
import SignUp from "./pages/SignUp";
import Start from "./pages/Start";
import { useRecoilValue } from "recoil";
import { userState } from "./recoil/atoms/userState";

const Router = () => {
  const user = useRecoilValue(userState);

  return (
    <BrowserRouter>
      <Container>
        <Main>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/findid" element={<FindId />} />
            <Route path="/findpassword" element={<FindPassword />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Main>
        {/* 유저가 로그인할 때만 Nav 보이도록. 지금은 데이터가 없으므로 주석처리 함 */}
        {/* {user.name && ( */}
        <Footer>
          <Nav />
        </Footer>
        {/* )} */}
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

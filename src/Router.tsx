import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Nav from "./components/Nav";
import styled from "styled-components";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Start from "./pages/Start";

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/start" element={<Start />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />
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

import { useNavigate } from "react-router";
import styled from "styled-components";

const Start = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Explain>
        <p>나만의 무럭이 키우기에</p>
        <p>놀러오신 것을 환영합니다!</p>
      </Explain>
      <SlideImg>
        <LogoImg src="/assets/images/logoimg1.png"></LogoImg>
        <Logo src="/assets/images/logo2.png"></Logo>
      </SlideImg>
      <StartBtn>
        <button onClick={() => navigate("/signin")}>시작하기</button>
      </StartBtn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  margin: auto;

  & p {
    font-weight: bold;
    font-size: 20px;
    color: gray;
  }
`;
const Logo = styled.img`
  width: 200px;
`;

const LogoImg = styled.img`
  width: 180px;
  margin-bottom: 20px;
`;

const Explain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const SlideImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StartBtn = styled.div`
  & button {
    padding: 19px 200px;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    font-size: 20px;
    background-color: #8cd57e;
  }
`;
export default Start;

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
      <ImgBox>
        <LogoImg src="/assets/images/logoimg1.png"></LogoImg>
        <Logo src="/assets/images/logo2.png"></Logo>
      </ImgBox>
      <StartBtn onClick={() => navigate("/signin")}>시작하기</StartBtn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100dvh;
  margin: auto;
`;

const Explain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & p {
    font-weight: bold;
    font-size: 1.3rem;
    color: gray;
  }

  @media screen and (max-width: 450px) {
    & p {
      font-size: 1rem;
    }
  }
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const LogoImg = styled.img`
  width: 180px;

  @media screen and (max-width: 450px) {
    width: 140px;
  }
`;

const Logo = styled.img`
  width: 200px;

  @media screen and (max-width: 450px) {
    width: 150px;
  }
`;

const StartBtn = styled.button`
  padding: 16px;
  width: 70%;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  font-size: 1.3em;
  background-color: #8cd57e;
  &:hover {
    cursor: pointer;
    filter: contrast(70%);
  }

  @media screen and (max-width: 450px) {
    padding: 12px;
    font-size: 1rem;
  }
`;
export default Start;

import styled from "styled-components";

const Start = () => {
  return (
    <Container>
      <Explain>
        <p>나만의 무럭이 키우기에</p>
        <p>놀러오신 것을 환영합니다!</p>
      </Explain>
      <SlideImg>
        <LogoImg src="/assets/image/logoimg1.png"></LogoImg>
        <Logo src="/assets/image/logo2.png"></Logo>
      </SlideImg>
      <StartBtn>
        <button>시작하기</button>
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
  width: 200px;
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
    padding: 15px 210px;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    background-color: #8cd57e;
  }
`;
export default Start;

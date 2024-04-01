import styled from "styled-components";

const Start = () => {
  return (
    <Container>
      <MainBox>
        <p>
          나만의 무럭이 키우기에 <br />
          놀러오신 것을 환영합니다.
        </p>
        <Logo src="/assets/image/logo2.png"></Logo>
        <button>시작하기</button>
      </MainBox>
    </Container>
  );
};

const Logo = styled.img`
  height: 40px;
  top: 300px;
  right: 27%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;

  & p {
    font-weight: bold;
    color: gray;
  }
`;

const MainBox = styled.div`
  position: relative;
`;
export default Start;

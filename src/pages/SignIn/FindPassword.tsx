import styled from "styled-components";

const FindPassword = () => {
  return (
    <Container>
      <Header>
        <Logo src="/assets/images/logo2.png"></Logo>
        <Title>비밀번호 찾기</Title>
        <p>비밀번호를 잊어버리셨나요?</p>
        <p>기존에 가입한 이메일을 통해 새로운 비밀번호를 설정할 수 있어요.</p>
      </Header>
      <Body>
        <input type="email" id="email" placeholder="이메일" />
        <button>재설정 메일 보내기</button>
        <p>해당 이메일의 메일함을 확인 한 후 접속해주세요.</p>
      </Body>
    </Container>
  );
};

const Logo = styled.img`
  height: 55px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    font-weight: bold;
    color: gray;
  }
`;

const Title = styled.p`
  font-size: 22px;
  margin-bottom: 55px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 45px;
  width: 70%;

  & input {
    padding: 15px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid gray;
  }

  & button {
    padding: 15px;
    margin: 5px 0;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    background-color: #8cd57e;
  }

  & p {
    color: #77b56a;
    font-weight: bold;
  }
`;

export default FindPassword;

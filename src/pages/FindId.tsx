import styled from "styled-components";

const FindId = () => {
  return (
    <Container>
      <Header>
        <Logo src="/assets/image/logo2.png"></Logo>
        <Title>아이디 찾기</Title>
        <p>기존에 가입한 이메일을 통해 인증번호를 받으세요.</p>
      </Header>
      <Body>
        <EmailSend>
          <input type="email" id="email" placeholder="이메일" />
          <button>인증하기</button>
        </EmailSend>

        <input
          type="number"
          id="number"
          placeholder="인증번호를 입력해주세요."
        />
        <p>해당 이메일로 전송된 인증번호를 입력해주세요.</p>
        <button>이메일로 보내기</button>
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

const EmailSend = styled.div`
  position: relative;
  & button {
    width: 95px;
    position: absolute;
    height: 48px;
    border-radius: 5px;
    border: none;
    top: 4px;
    right: 5px;
    background-color: #8cd57e;
    font-size: 14px;
    font-weight: bold;
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
    width: 100%;
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
    margin-bottom: 17px;
  }
`;

export default FindId;

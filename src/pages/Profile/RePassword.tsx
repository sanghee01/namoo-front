import styled from "styled-components";

const RePassword = () => {
  return (
    <Container>
      <Header>
        <Logo src="/assets/images/logo2.png"></Logo>
        <Title>비밀번호 재설정</Title>
        <p>새롭게 사용할 비밀번호를 설정해주세요.</p>
      </Header>
      <Body>
        <input type="password" id="password" placeholder="새로운 비밀번호 입력" />
        <p>
          * 8자 이상 <br /> * 알파벳, 숫자를 이용하여 조합
        </p>
        <input type="password" id="password" placeholder="새로운 비밀번호 재입력" />
        <button>재설정 완료</button>
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
    white-space: pre-wraps;
    font-size: 14px;
    color: gray;
    font-weight: bold;
    margin-bottom: 17px;
  }
`;
export default RePassword;

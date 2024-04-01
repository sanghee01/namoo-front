import styled from "styled-components";

const SignUp = () => {
  return (
    <Container>
      <Header>
        {/* <h1>로그인</h1> */}
        <Logo src="/assets/image/logo2.png"></Logo>
        <p>가입을 통해 똑똑한 나만의 무럭이를 키워보세요!</p>
      </Header>
      <Body>
        <InformationBox>
          <Input type="nickname" id="nickname" placeholder="닉네임 입력" />
          <EmailSend>
            <Input type="email" id="email" placeholder="이메일 입력" />
            <button>인증하기</button>
          </EmailSend>
          <Input type="password" id="password" placeholder="비밀번호 입력" />
          <Input
            type="repassword"
            id="repassword"
            placeholder="비밀번호 재입력"
          />
          <Input
            type="phone"
            id="phone"
            placeholder="휴대폰 번호 입력(- 제외 11자리 입력)"
          />
          <Input
            type="destination"
            id="destination"
            placeholder="키트를 배송 받을 배송지 입력"
          />
        </InformationBox>
        <SignupBtn>
          <button>가입하기</button>
        </SignupBtn>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    font-weight: bold;
    color: gray;
    margin-top: 2px;
  }
`;

const Logo = styled.img`
  height: 55px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  width: 65%;
`;

const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmailSend = styled.div`
  position: relative;
  & button {
    position: absolute;
    width: 90px;
    height: 40px;
    border-radius: 5px;
    border: none;
    top: 13px;
    right: 5px;
    background-color: #8cd57e;
    font-size: 13px;
    font-weight: bold;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin: 8px 0;
  border-radius: 5px;
  border: 1px solid gray;
  font-size: 13px;
`;

const SignupBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  & button {
    width: 70%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    background-color: #8cd57e;
  }
`;
export default SignUp;

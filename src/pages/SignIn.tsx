import styled from "styled-components";

const SignIn = () => {
  return (
    <Container>
      <Header>
        <h1>로그인</h1>
        <p>나만의 식물 키우기에 로그인 해주세용!</p>
      </Header>
      <Body>
        <LoginBox>
          <Input type="email" id="email" placeholder="이메일" />
          <Input type="password" id="password" placeholder="비밀번호" />
          <LoginCheckBox>
            <input
              type="checkbox"
              id="keeplogin"
              placeholder="로그인 상태 유지"
            />
            <span>로그인 상태 유지</span>
          </LoginCheckBox>
          <LoginBtn>로그인</LoginBtn>
        </LoginBox>
        <FindBox>
          <span onClick={() => console.log(1)}>아이디 찾기</span>
          <span>|</span>
          <span>비밀번호 찾기</span>
          <span>|</span>
          <span> 회원가입</span>
        </FindBox>
        <KakaoBox>
          <hr />
          <p>간편 로그인</p>
          <KakaoBtn>카카오 로그인</KakaoBtn>
        </KakaoBox>
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
  padding: 60px 0;
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

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  width: 65%;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 12px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid gray;
`;

const LoginCheckBox = styled.div`
  & input {
    border-radius: 100%;
  }
  & span {
    margin-left: 3px;
    font-size: 13px;
    font-weight: bold;
    color: #9a9a9a;
  }
`;

const LoginBtn = styled.button`
  padding: 12px;
  margin: 15px 2px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  background-color: #8cd57e;
`;

const FindBox = styled.div`
  margin: 18px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  & span {
    margin: 0 5px;
    cursor: pointer;
    font-weight: bold;
    color: #9a9a9a;
  }
`;

const KakaoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  padding: 10px 0;

  & hr {
    position: relative;
    bottom: -8px;
    display: block;
    margin: 0;
    width: 100%;
    height: 2px;
    background-color: lightgray;
    border: none;
  }
  & p {
    padding: 0 12px;
    margin-bottom: 5px;
    font-size: 13px;
    font-weight: bold;
    color: #9a9a9a;
    background-color: white;
    line-height: 16px;
    z-index: 1;
  }
`;
const KakaoBtn = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: none;
  background-color: #f8e056;
  font-weight: bold;
`;
export default SignIn;

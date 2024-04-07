import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { userState } from "../recoil/state";

const SignIn = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  // 로그인 버튼 클릭 시 실행되는 함수
  function clickLoginBtn() {
    navigate("/home");
    // 이 자리에 HTTP 요청 함수 올 예정
    const user = "홍길동";
    setUser(user);
  }

  return (
    <Container>
      <Header>
        <Logo src="/assets/image/logo2.png"></Logo>
        <p>나만의 무럭이 키우기를 시작해주세용!</p>
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
          <LoginBtn onClick={() => clickLoginBtn()}>로그인</LoginBtn>
        </LoginBox>
        <FindBox>
          <span onClick={() => navigate("/findid")}>아이디 찾기</span>
          <span>|</span>
          <span onClick={() => navigate("/findpassword")}>비밀번호 찾기</span>
          <span>|</span>
          <span onClick={() => navigate("/signup")}> 회원가입</span>
        </FindBox>
        <KakaoBox>
          <hr />
          <p>간편 로그인</p>
          <KakaoBtn
            src="/assets/image/kakao_logo.png"
            onClick={() => console.log("카카오로그인")}
          ></KakaoBtn>
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
    margin-top: 2px;
  }
`;

const Logo = styled.img`
  height: 55px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  width: 70%;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 15px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid gray;
`;

const LoginCheckBox = styled.div`
  cursor: pointer;
  & span {
    margin-left: 3px;
    font-size: 15px;
    font-weight: bold;
    color: #9a9a9a;
  }
`;

const LoginBtn = styled.button`
  padding: 16px;
  margin: 18px 2px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  background-color: #8cd57e;
`;

const FindBox = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
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
    font-size: 15px;
    font-weight: bold;
    color: #9a9a9a;
    background-color: white;
    line-height: 16px;
    z-index: 1;
  }
`;

const KakaoBtn = styled.img`
  margin-top: 10px;
  height: 56px;
  width: 385px;
  cursor: pointer;
`;

export default SignIn;

import { useNavigate } from "react-router";
import styled from "styled-components";
import { useCallback, useEffect, useState, useRef } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userState } from "../../state/atoms";
import { useLocation } from "react-router";

const SignIn = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activate = searchParams.get("activate");
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current && activate === "true") {
      didMountRef.current = true;
      alert("메일 인증 성공! 로그인을 해주세요.");
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    [email],
  );

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [password],
  );

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER_APIADDRESS}/member/login`, {
          email,
          password,
        });
        console.log("성공", response);
        setUser(response.data.content.username);
        navigate("/home");
      } catch (error: any) {
        console.log(error.response);
        alert(error.response.data.message);
        const errorMessage = error.response.data.content;
        if (errorMessage.email) alert(`아이디는 ${errorMessage.email}`);
        if (errorMessage.password) alert(`비밀번호는 ${errorMessage.password}`);
      }
    },
    [email, password],
  );

  return (
    <Container>
      <Header>
        <Logo src="/assets/images/logo2.png"></Logo>
        <p>나만의 무럭이 키우기를 시작해주세용!</p>
      </Header>
      <LoginForm onSubmit={onSubmit}>
        <InputBox>
          <Input type="email" id="email" name="email" onChange={onChangeEmail} placeholder="이메일" />
          <Input type="password" id="password" name="password" onChange={onChangePassword} placeholder="비밀번호" />
          <LoginCheckBox>
            <input type="checkbox" id="keeplogin" name="keeplogin" placeholder="로그인 상태 유지" />
            <span>로그인 상태 유지</span>
          </LoginCheckBox>
          <LoginBtn type="submit">로그인</LoginBtn>
        </InputBox>
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
          <KakaoBtn src="/assets/images/kakao_logo.png" onClick={() => console.log("카카오로그인")}></KakaoBtn>
        </KakaoBox>
      </LoginForm>
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

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  width: 70%;
`;

const InputBox = styled.div`
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

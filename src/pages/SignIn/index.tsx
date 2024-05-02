import { useNavigate } from "react-router";
import { useCallback, useEffect, useState, useRef } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userState } from "../../state/atoms";
import { useLocation } from "react-router";
import React from "react";
import {
  Container,
  Header,
  Logo,
  SubmitForm,
  InputBox,
  LoginCheckBox,
  Input,
  SubmitBtn,
  FindBox,
  KakaoLogin,
  EasyLoginBox,
} from "./style";

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
      <SubmitForm onSubmit={onSubmit}>
        <InputBox>
          <Input type="email" id="email" name="email" onChange={onChangeEmail} placeholder="이메일" />
          <Input type="password" id="password" name="password" onChange={onChangePassword} placeholder="비밀번호" />
          <LoginCheckBox>
            <input type="checkbox" id="keeplogin" name="keeplogin" placeholder="로그인 상태 유지" />
            <span>로그인 상태 유지</span>
          </LoginCheckBox>
          <SubmitBtn type="submit">로그인</SubmitBtn>
        </InputBox>
        <FindBox>
          <span onClick={() => navigate("/findid")}>아이디 찾기</span>
          <span>|</span>
          <span onClick={() => navigate("/findpassword")}>비밀번호 찾기</span>
          <span>|</span>
          <span onClick={() => navigate("/signup")}> 회원가입</span>
        </FindBox>
        <EasyLoginBox>
          <hr />
          <p>간편 로그인</p>
          <KakaoLogin>
            <img src="/assets/images/kakaoLogo.png" />
            <button onClick={() => console.log("카카오로그인")}>카카오 로그인</button>
          </KakaoLogin>
        </EasyLoginBox>
      </SubmitForm>
    </Container>
  );
};

export default SignIn;

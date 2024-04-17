import { useNavigate } from "react-router";
import styled from "styled-components";
import { useCallback, useState } from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userState } from "../../state/atoms";
import React from "react";

const SignIn = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

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
        <EasyLoginBox>
          <hr />
          <p>간편 로그인</p>
          <KakaoLogin>
            <img src="/assets/images/kakaoLogo.svg" />
            <button onClick={() => console.log("카카오로그인")}>카카오 로그인</button>
          </KakaoLogin>
        </EasyLoginBox>
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
  height: 100dvh;
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
  @media screen and (max-width: 450px) {
    & p {
      font-size: 0.9rem;
    }
  }
`;

const Logo = styled.img`
  height: 55px;
  @media screen and (max-width: 450px) {
    height: 45px;
  }
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

  @media screen and (max-width: 450px) {
    padding: 10px;
    font-size: 0.85rem;
  }
`;

const LoginCheckBox = styled.div`
  cursor: pointer;
  & span {
    margin-left: 3px;
    font-size: 0.9rem;
    font-weight: bold;
    color: #9a9a9a;
  }

  @media screen and (max-width: 450px) {
    & span {
      font-size: 0.75rem;
    }
  }
`;

const LoginBtn = styled.button`
  padding: 16px;
  margin: 18px 2px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  background-color: #8cd57e;
  @media screen and (max-width: 450px) {
    padding: 10px;
    font-weight: 600;
    font-size: 0.85rem;
  }
`;

const FindBox = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  & span {
    margin: 0 5px;
    cursor: pointer;
    font-weight: bold;
    color: #9a9a9a;
  }

  @media screen and (max-width: 450px) {
    padding: 10px;
    font-size: 0.8rem;
    margin: 7px 0;
    & span {
      margin: 0 4px;
    }
  }
`;

const EasyLoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
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
    padding: 0 8px;
    margin-bottom: 16px;
    line-height: 16px;
    letter-spacing: -0.3px;
    z-index: 1;
    color: #9a9a9a;
    background-color: #fff;
  }
  @media screen and (max-width: 450px) {
    & p {
      font-size: 0.9rem;
    }
  }
`;
const KakaoLogin = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  background-color: #fddc3f;
  padding: 16px 12px;
  border-radius: 10px;
  width: 100%;
  & img {
    z-index: 1;
  }
  & button {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    background-color: inherit;
    margin-left: -22.66px;
  }
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 450px) {
    padding: 10px;
    & button {
      font-weight: 600;
      font-size: 0.85rem;
    }
  }
`;

export default SignIn;

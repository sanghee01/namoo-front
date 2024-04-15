import styled from "styled-components";
import { useCallback, useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [mismatchError, setMismatchError] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    [email],
  );

  const onChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
    },
    [username],
  );

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck],
  );

  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password],
  );

  const onChangePhoneNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPhoneNumber(e.target.value);
    },
    [phoneNumber],
  );

  const onChangeAddress = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAddress(e.target.value);
    },
    [address],
  );

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!mismatchError) {
        console.log(email, username, password, passwordCheck);
        setSignUpError("");
        setSignUpSuccess(false);
        axios
          .post(`${import.meta.env.VITE_SERVER_APIADDRESS}/member/join`, {
            email,
            username,
            password,
          })
          .then((response) => {
            console.log("성공", response);
            setSignUpSuccess(true);
          })
          .catch((error) => {
            console.log("에러발생:", error.response);
            setSignUpError(error.response.data);
          })
          .finally(() => {});
      }
    },
    [email, username, password, passwordCheck, phoneNumber, address, mismatchError],
  );

  return (
    <Container>
      <Header>
        <Logo src="/assets/images/logo2.png"></Logo>
        <p>가입을 통해 똑똑한 나만의 무럭이를 키워보세요!</p>
      </Header>
      <SignUpForm onSubmit={onSubmit}>
        <InformationBox>
          <Input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={onChangeName}
            placeholder="닉네임 입력"
          />
          {/* <EmailSend> */}
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일 입력"
          />
          {/* <button>인증하기</button> */}
          {/* </EmailSend> */}
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호 입력"
          />
          <p>* 8자 이상, 알파벳, 숫자를 이용하여 조합</p>
          <Input
            type="password"
            id="passwordCheck"
            name="passwordCheck"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            placeholder="비밀번호 재입력"
          />
          <Input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={onChangePhoneNumber}
            placeholder="휴대폰 번호 입력"
          />
          <p> * '-' 제외하고 11자리 입력</p>
          <Input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={onChangeAddress}
            placeholder="키트를 배송 받을 배송지 입력"
          />
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {!username && <Error>닉네임을 입력해주세요.</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
        </InformationBox>
        <SignupBtn type="submit">가입하기</SignupBtn>
      </SignUpForm>
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

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  width: 68%;

  & p {
    white-space: pre-wraps;
    font-size: 14px;
    color: gray;
    font-weight: bold;
  }
`;

const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
`;

// const EmailSend = styled.div`
//   position: relative;
//   & button {
//     position: absolute;
//     width: 90px;
//     height: 40px;
//     border-radius: 5px;
//     border: none;
//     top: 13px;
//     right: 5px;
//     background-color: #8cd57e;
//     font-size: 13px;
//     font-weight: bold;
//   }
// `;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 8px 0;
  border-radius: 5px;
  border: 1px solid gray;
  font-size: 15px;
`;

const SignupBtn = styled.button`
  margin-top: 50px;
  padding: 13px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  background-color: #8cd57e;
`;

const Error = styled.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`;

const Success = styled.div`
  color: #2eb67d;
  font-weight: bold;
`;

export default SignUp;

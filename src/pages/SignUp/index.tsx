import { useCallback, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Container, Header, Logo, InputBox, Input, SubmitForm, SubmitBtn, Error } from "../SignIn/style";
const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [mismatchError, setMismatchError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!mismatchError) {
        console.log(email, username, password, passwordCheck);
        setEmailError("");
        setUsernameError("");
        setPasswordError("");
        try {
          const response = await axios.post(`${import.meta.env.VITE_SERVER_APIADDRESS}/member/join`, {
            email,
            username,
            password,
          });
          console.log("성공", response);
          alert(response.data.message);
          navigate("/signin");
        } catch (error: any) {
          const errorMessage = error.response.data.content;
          if (errorMessage.email) setEmailError(errorMessage.email);
          if (errorMessage.password) setPasswordError(errorMessage.password);
          if (errorMessage.username) setUsernameError(errorMessage.username);
        }
      }
    },
    [email, username, password, passwordCheck, mismatchError],
  );

  return (
    <Container>
      <Header onClick={() => navigate("/signin")}>
        <Logo src="/assets/images/logo2.png"></Logo>
        <p>가입을 통해 똑똑한 나만의 무럭이를 키워보세요!</p>
      </Header>
      <SubmitForm onSubmit={onSubmit}>
        <InputBox>
          <Input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={onChangeName}
            placeholder="닉네임 입력"
          />
          {usernameError && <Error>{usernameError}</Error>}
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChangeEmail}
            placeholder="이메일 입력"
          />
          {emailError && <Error>{emailError}</Error>}
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
          {passwordError && <Error>{passwordError}</Error>}
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
        </InputBox>
        <SubmitBtn type="submit">가입하기</SubmitBtn>
      </SubmitForm>
    </Container>
  );
};

export default SignUp;

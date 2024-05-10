import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { Container, Header, Logo, InputBox, Label, Input, SubmitForm, SubmitBtn, Error } from "../Login/style";
import { join } from "../../services/signupApi";
import { useRedirectIfLoggedIn } from "../../hooks/useRedirectIfLoggedIn";

const SignUp = () => {
  useRedirectIfLoggedIn(); // 로그인 상태면 /home으로 redirect 되도록 하는 함수

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [mismatchError, setMismatchError] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }, []);

  const handleChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck],
  );

  const handleChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!mismatchError) {
        setEmailError("");
        setUsernameError("");
        setPasswordError("");
        try {
          const response = await join(email, username, password);
          alert(response);
          navigate("/login");
        } catch (error: any) {
          const errorMessage = error.response.data.message;
          const errorContent = error.response.data.content;
          if (errorMessage) alert(errorMessage);
          if (errorContent.email) setEmailError(errorContent.email);
          if (errorContent.password) setPasswordError(errorContent.password);
          if (errorContent.username) setUsernameError(errorContent.username);
        }
      }
    },
    [mismatchError, email, username, password, navigate],
  );

  return (
    <Container>
      <Header onClick={() => navigate("/login")}>
        <Logo src="/assets/images/logo2.png"></Logo>
        <p>가입을 통해 똑똑한 나만의 무럭이를 키워보세요!</p>
      </Header>
      <SubmitForm onSubmit={handleSubmit}>
        <InputBox>
          <Label htmlFor="username">닉네임</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChangeName}
            placeholder="닉네임 입력"
          />
          {usernameError && <Error>{usernameError}</Error>}
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder="이메일 입력"
          />
          {emailError && <Error>{emailError}</Error>}
          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="비밀번호 입력"
          />
          <p>* 8자 이상, 알파벳, 숫자를 이용하여 조합</p>
          <Label htmlFor="passwordCheck">비밀번호 확인</Label>
          <Input
            type="password"
            id="passwordCheck"
            name="passwordCheck"
            value={passwordCheck}
            onChange={handleChangePasswordCheck}
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

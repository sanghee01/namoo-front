import styled from "styled-components";
import { useCallback, useState } from "react";
import { changePassword } from "../../services/changePasswordApi";
import { useNavigate } from "react-router";
import { useRedirectIfLoggedIn } from "../../hooks/useRedirectIfLoggedIn";

const ChangePassword = () => {
  useRedirectIfLoggedIn(); // 로그인 상태면 /home으로 redirect 되도록 하는 함수

  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [mismatchError, setMismatchError] = useState(false);
  const [errorTxt, setErrorTxt] = useState("");

  const searchParams = new URLSearchParams(location.search);
  const uuid = searchParams.get("code");
  const email = searchParams.get("email");

  const handleChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      setMismatchError(e.target.value !== passwordConfirm);
    },
    [passwordConfirm],
  );

  const handleChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordConfirm(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!mismatchError) {
        setErrorTxt("");
        try {
          const response = await changePassword(password, passwordConfirm, email, uuid);
          alert(response);
          navigate("/login");
        } catch (error: any) {
          const errorMessage = error.response.data.message;
          const errorContent = error.response.data.content;
          if (errorMessage) alert(errorMessage);
          if (errorContent.password) alert(errorContent.password);
          if (errorContent.passwordConfirm) setErrorTxt(errorContent.passwordConfirm);
        }
      }
    },
    [password, passwordConfirm, email, uuid, mismatchError, navigate],
  );

  return (
    <Container>
      <Header onClick={() => navigate("/login")}>
        <Logo src="/assets/images/logo2.png"></Logo>
        <Title>비밀번호 재설정</Title>
        <p>새로운 비밀번호를 입력해주세요!</p>
      </Header>
      <SubmitForm onSubmit={handleSubmit}>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
          placeholder="비밀번호 입력"
        />
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={handleChangePasswordCheck}
          placeholder="비밀번호 재입력"
        />
        <p>* 8자 이상, 알파벳, 숫자를 이용하여 조합</p>
        <button type="submit">비밀번호 재설정</button>
        {mismatchError && <ErrorTxt>비밀번호가 일치하지 않습니다.</ErrorTxt>}
        {errorTxt && <ErrorTxt>{errorTxt}</ErrorTxt>}
      </SubmitForm>
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

const SubmitForm = styled.form`
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
    font-size: 0.8rem;
    margin-bottom: 10px;
  }
`;

const MessageTxt = styled.p`
  margin-top: 10px;
  color: #3c8929;
  font-weight: bold;
  font-size: 0.9rem;
`;

const ErrorTxt = styled(MessageTxt)`
  color: #e01e5a;
`;

export default ChangePassword;

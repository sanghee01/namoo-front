import styled from "styled-components";
import { resetPassword } from "../../services/resetPasswordApi";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router";

const FindPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [messageTxt, setMessageTxt] = useState("");
  const [errorTxt, setErrorTxt] = useState("");

  const handleChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      setErrorTxt("");
      e.preventDefault();
      try {
        const response = await resetPassword(email);
        setMessageTxt(response);
      } catch (error: any) {
        const errorMessage = error.response.data.message;
        const errorContent = error.response.data.content;
        if (errorMessage) alert(errorMessage);
        if (errorContent.email) setErrorTxt(errorContent.email);
      }
    },
    [email],
  );
  return (
    <Container>
      <Header onClick={() => navigate("/login")}>
        <Logo src="/assets/images/logo2.png"></Logo>
        <Title>비밀번호 찾기</Title>
        <p>비밀번호를 잊어버리셨나요?</p>
        <p>기존에 가입한 이메일을 통해</p>
        <p>새로운 비밀번호를 설정할 수 있어요.</p>
      </Header>
      <SubmitForm onSubmit={handleSubmit}>
        <input type="email" id="email" placeholder="이메일" onChange={handleChangeEmail} />
        <button type="submit">비밀번호 재설정 메일 보내기</button>
        {messageTxt && <MessageTxt>{messageTxt}</MessageTxt>}
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

export default FindPassword;

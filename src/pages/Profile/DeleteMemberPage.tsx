import styled from "styled-components";
import { useCallback, useState } from "react";
import useLogout from "../../hooks/useLogout";
import { useDeleteMember } from "../../hooks/useDeleteMember";

const DeleteMemeberPage = () => {
  const [errorTxt, setErrorTxt] = useState("");
  const [password, setPassword] = useState("");

  const deleteMember = useDeleteMember(); // 커스텀 Hook 사용
  const logout = useLogout(); // 로그아웃 함수 볼러오기

  const handleChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const handleDeleteMember = useCallback(
    async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.preventDefault();
      try {
        const response = await deleteMember(password);
        alert(response);
        logout();
      } catch (error: any) {
        const errorMessage = error.response.data.message;
        const errorContent = error.response.data.content;
        if (errorMessage) setErrorTxt(errorMessage);
        if (errorContent) alert(errorContent);
      }
    },
    [deleteMember, logout, password],
  );

  return (
    <Container>
      <Header>
        <Logo src="/assets/images/logo2.png"></Logo>
        <Title>회원탈퇴</Title>
        <p>회원탈퇴를 원하시면</p>
        <p>비밀번호를 입력해주세요.</p>
      </Header>
      <SubmitForm>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
          placeholder="비밀번호 입력"
        />
        <button onClick={handleDeleteMember}>탈퇴하기</button>
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

export default DeleteMemeberPage;

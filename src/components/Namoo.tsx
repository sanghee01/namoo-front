import { useNavigate } from "react-router";
import styled from "styled-components";
import useLogout from "../hooks/useLogout";

interface INammoInfo {
  txt1: string;
  txt2: string;
  navUrl: string;
  btnTxt: string;
}

const Namoo = ({ txt1, txt2, navUrl, btnTxt }: INammoInfo) => {
  const navigate = useNavigate();
  const logout = useLogout(); // 로그아웃 함수 볼러오기

  const handleClickBtn = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    logout();
    navigate(navUrl);
  };

  return (
    <Container>
      <Explain>
        <p>{txt1}</p>
        <p>{txt2}</p>
      </Explain>
      <ImgBox>
        <LogoImg src="/assets/images/logoimg1.png"></LogoImg>
        <Logo src="/assets/images/logo2.png"></Logo>
      </ImgBox>
      <StartBtn onClick={handleClickBtn}>{btnTxt}</StartBtn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100dvh;
  margin: auto;
`;

const Explain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & p {
    font-weight: bold;
    font-size: 1.3rem;
    color: gray;
  }

  @media screen and (max-width: 450px) {
    & p {
      font-size: 1rem;
    }
  }
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const LogoImg = styled.img`
  width: 180px;

  @media screen and (max-width: 450px) {
    width: 140px;
  }
`;

const Logo = styled.img`
  width: 200px;

  @media screen and (max-width: 450px) {
    width: 150px;
  }
`;

const StartBtn = styled.button`
  padding: 16px;
  width: 70%;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  font-size: 1.3em;
  background-color: #8cd57e;
  color: black;

  &:hover {
    cursor: pointer;
    filter: contrast(70%);
  }

  @media screen and (max-width: 450px) {
    padding: 12px;
    font-size: 1rem;
  }
`;
export default Namoo;

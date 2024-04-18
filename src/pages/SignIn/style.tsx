import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  height: 100dvh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    font-weight: bold;
    color: gray;
    margin-top: 3px;
  }
  @media screen and (max-width: 450px) {
    & p {
      font-size: 0.8rem;
    }
  }
`;

export const Logo = styled.img`
  height: 55px;
  @media screen and (max-width: 450px) {
    height: 45px;
  }
`;

export const SubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  width: 70%;
  & p {
    white-space: pre-wraps;
    font-size: 14px;
    color: gray;
    font-weight: bold;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  & p {
    font-size: 0.85rem;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 450px) {
    & p {
      font-size: 0.7rem;
    }
  }
`;

export const Input = styled.input`
  padding: 15px;
  margin: 8px 0;
  border-radius: 5px;
  border: 1px solid gray;

  @media screen and (max-width: 450px) {
    margin: 6px 0;
    padding: 10px;
    font-size: 0.85rem;
  }
`;

export const LoginCheckBox = styled.div`
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

export const SubmitBtn = styled.button`
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

export const FindBox = styled.div`
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

export const EasyLoginBox = styled.div`
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
export const KakaoLogin = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  background-color: #fddc3f;
  padding: 16px 12px;
  border-radius: 10px;
  width: 100%;
  & img {
    z-index: 1;
    width: 30px;
    margin-left: 5px;
  }
  & button {
    width: 100%;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    background-color: inherit;
    margin-left: -27.66px;
  }
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 450px) {
    padding: 10px;
    & img {
      width: 23px;
      margin-left: 5px;
    }
    & button {
      font-weight: 600;
      font-size: 0.85rem;
      margin-left: -24.66px;
    }
  }
`;

export const Error = styled.div`
  color: #e01e5a;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 0.85rem;

  @media screen and (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

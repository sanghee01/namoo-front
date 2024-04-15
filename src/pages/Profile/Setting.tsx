import styled from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsPersonFillGear } from "react-icons/bs";
import { FaUserLock } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { HiOutlineTrash } from "react-icons/hi";
import { RiFeedbackLine } from "react-icons/ri";

const Setting = () => {
  return (
    <SettingBackGround>
      <Header>
        <Link to="/profile">
          <MdArrowBackIos size="30" />
        </Link>
        <Text>설정</Text>
      </Header>
      <ListItem>
        <IconBox>
          <BsPersonFillGear size="30" />
        </IconBox>
        계정
      </ListItem>
      <ListItem>
        <IconBox>
          <LuLogOut size="30" />
        </IconBox>
        로그아웃
      </ListItem>
      <ListItem>
        <IconBox>
          <HiOutlineTrash size="30" />
        </IconBox>
        회원탈퇴
      </ListItem>
      <ListItem>
        <IconBox>
          <FaUserLock size="30" />
        </IconBox>
        개인정보 처리방침
      </ListItem>
      <ListItem>
        <IconBox>
          <RiFeedbackLine size="30" />
        </IconBox>
        문의하기
      </ListItem>
    </SettingBackGround>
  );
};

export const SettingBackGround = styled.div`
  flex: 1;
  position: relative;
  background-color: #fffaed;
  background-size: cover;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 25px;
  height: 10%;

  svg:hover {
    cursor: pointer;
  }
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const SubText = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0px 20px 0px 0px;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0; // 연한 회색 선
  cursor: pointer;

  &:hover {
    background-color: #fef0c6; // 마우스 오버 시 배경색 변경 (선택사항)
  }
`;

export default Setting;

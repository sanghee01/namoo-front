import styled from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { Text }from "./styles";

const Encyclopedia = () => {
  return (
    <EncyclopediaBackGround>
      <Header>
        <Link to="/profile">
          <MdArrowBackIos size="30"/>
        </Link>
          <Text>
            식물 도감
          </Text>
      </Header>
    </EncyclopediaBackGround>
  );
};

export const EncyclopediaBackGround = styled.div`
  background-image: url("/assets/images/bookshelf.png");
  background-repeat: no-repeat;
  background-color: #fffaed;
  background-size: 550px 700px;
  height: 100%;

  @media screen and (max-width: 600px){
    background-size: 400px 650px;
  } 
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
  height: 10%;

  svg:hover {
    cursor: pointer;
  }
`;

export default Encyclopedia;

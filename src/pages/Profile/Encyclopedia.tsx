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
      <Container>
        <BookOne>
          <BookImg src="/assets/images/LettuceBook.png"/>
        </BookOne>
        <BookTwo>
        <BookImg src="/assets/images/StrawberryBook.png"/>
        </BookTwo>
      </Container>
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

export const Container = styled.div`
    width: 100%;
    height: 90%; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;

export const BookOne = styled.div`
    width: 100%;
    height: 45%; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    padding: 5px;

      @media screen and (max-width:600px){
        height:35%
    }

`;

export const BookTwo = styled.div`
    width: 100%;
    height: 45%; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5px;

      @media screen and (max-width:600px){
        height:60%
    }
`;

export const BookImg = styled.img`
    width: 150px;
    height: 150px;

    &:hover {
        cursor: pointer; 

        @media screen and (max-width:600px){
          width: 100px;
          height: 100px;
        }
`;

export default Encyclopedia;

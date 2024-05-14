import styled from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { Text }from "./styles";
import { useState } from 'react';
import Modal from "../../components/Modal";

const Encyclopedia = () => {
  const [selectedImage, setSelectedImage] = useState('');

  // 상태 업데이트 시 콘솔 로그 추가
  const handleImageSelect = (image : any) => {
    console.log(`Selected image: ${image}`);
    setSelectedImage(image);
  };

  return (
    <EncyclopediaBackGround>
      <Header>
        <Link to="/profile">
          <MdArrowBackIos size="30"/>
        </Link>
        <Text>식물 도감</Text>
      </Header>
      <Container>
        <BookOne onClick={() => handleImageSelect('lettuce')}>
          <BookImg src="/assets/images/LettuceBookShelf.png" alt="lettuce"/>
        </BookOne>
        <BookOne onClick={() => handleImageSelect('strawberry')}>
          <BookImg src="/assets/images/StrawberryBookShelf.png" alt="strawberry"/>
        </BookOne>
      </Container>
      <Modal isOpen={selectedImage !== ''} onClose={() => setSelectedImage('')}>
      {selectedImage === 'lettuce' && (
        <img src="/assets/images/LettuceDetail.png" alt="Lettuce"/>
      )}
      {selectedImage === 'strawberry' && (
        <img src="/assets/images/StrawberryDetail.png" alt="Strawberry"/>
      )}
      </Modal>
    </EncyclopediaBackGround>
    );
  };

export const EncyclopediaBackGround = styled.div`
  background-repeat: no-repeat;
  background-color: #fffaed;
  background-size: 550px 700px;
  height: 100%;
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

export const BookImg = styled.img`
    &:hover {
        cursor: pointer; 
    }
`;

export default Encyclopedia;

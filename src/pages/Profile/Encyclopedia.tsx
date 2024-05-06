import styled from "styled-components";

const Encyclopedia = () => {
  return (
    <EncyclopediaBackGround>
      <Header></Header>
    </EncyclopediaBackGround>
  );
};

export const EncyclopediaBackGround = styled.div`
  background-image: url("/assets/images/bookshelf.png");
  background-repeat: no-repeat;
  background-color: #fffaed;
  background-size: 550px;
  height: 100%;

  @media screen and (max-width: 600px){
    background-size: 400px 600px;
  } 
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  height: 10%;

  svg:hover {
    cursor: pointer;
  }
`;

export default Encyclopedia;

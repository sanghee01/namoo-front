import styled from "styled-components";

const Encyclopedia = () => {
  return (
    <EncyclopediaBackGround>
      <Header></Header>
    </EncyclopediaBackGround>
  );
};

export const EncyclopediaBackGround = styled.div`
  flex: 1;
  position: relative;
  background-color: #fffaed;
  background-size: cover;
  height: 100%;
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

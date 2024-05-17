import styled from "styled-components";

const CheckDisease = () => {
  return (
    <Container>
      <h2>질병확인</h2>
      <span>사진을 업로드 해주세요!</span>
      <input type="file" accept="image/*" />
    </Container>
  );
};

export default CheckDisease;

const Container = styled.div`
  height: 80dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

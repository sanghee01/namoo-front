import styled from "styled-components";

const AddPlant = () => {
  return (
    <AddPlantBackGround>
      <Header>
        <Text>식물 입양 동의서</Text>
      </Header>
      <SubText>01 식물 선택</SubText>
      <SelectPlant>
        <PlantCard>
          <ImgBox>
            <PlantImg src="/assets/images/plant.png" alt="plant" />
            <Name>상추</Name>
          </ImgBox>
        </PlantCard>
        <PlantCard>
          <ImgBox>
            <StrawberryImg src="/assets/images/strawberry.png" alt="strawberry" />
            <Name>딸기</Name>
          </ImgBox>
        </PlantCard>
      </SelectPlant>
      <SubText>02 식물 이름</SubText>
      <Input type="name" id="name" placeholder="이름" />
      <SubText>03 입양 날짜</SubText>
      <Input type="number" id="date" placeholder="년도-월-일" />
      <BtnContainer>
        <Button>동의합니다</Button>
      </BtnContainer>
    </AddPlantBackGround>
  );
};

export const AddPlantBackGround = styled.div`
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
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const SubText = styled.p`
  font-size: 15px;
  font-weight: medium;
  padding: 0px 0px 0px 25px;
`;

export const SelectPlant = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const PlantCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 90%;
  border-radius: 30px;
  background-color: #feefc6;
  margin: 10px;

  &:hover {
    border: 2px solid #f0e68c;
    cursor: pointer;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 250px;
`;

export const PlantImg = styled.img`
  width: 120px;
  height: 120px;
  margin: 10px;
`;

export const StrawberryImg = styled.img`
  height: 150px;
  margin: 10px;
`;
export const Name = styled.span`
  margin: 5px 5px 0px 5px;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 15px;
  margin: 10px 5px 10px 25px;
  height: 45px;
  width: 340px;
  border-radius: 15px;
  border: 2px solid gray;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

export const Button = styled.button`
    /  * 공통 스타일 */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    border-radius: 10px;
    color: white;

    cursor: pointer;
    padding-left: 1.25rem;
    padding-right: 1.25rem;

    /* 크기 */
    height: 2.5rem;
    font-size: 1rem;

    /* 색상 */
    background: #008a4c;
    &:hover {
    background: #006400;
    }
    &:active {
    background: #2E8B57;
    }

    /* 기타 */
    & + & {
    margin-left: 1rem;
    }
`;

export default AddPlant;

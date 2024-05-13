import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcPlus } from "react-icons/fc";
import { useRecoilValue } from "recoil";
import { IoMdSettings } from "react-icons/io";
import { plantListState } from "../../state/plantState";
import { useEffect } from "react";
import { usePlantList } from "../../hooks/useGetPlantList";

const MyPlant = () => {
  const plants = useRecoilValue(plantListState);
  const getPlantList = usePlantList(); // usePlantList 훅 사용
  const plantList = useRecoilValue(plantListState);

  useEffect(() => {
    async function fetchPlantList() {
      await getPlantList(); // 식물 리스트 가져오기
    }
    if (!plantList || plantList.length === 0) {
      fetchPlantList();
    }
    console.log("식물리스트", plantList);
  }, [getPlantList, plantList]);

  // 식물 카드 또는 추가 링크를 렌더링하는 함수
  const renderPlantOrAddLink = (index: number) => {
    // 식물 데이터가 있는 경우
    if (plants.length > index) {
      const plant = plants[index];
      let imageSrc = "/assets/images/logoimg1.png"; // 기본 이미지
      if (plant.plantType === "상추") {
        imageSrc = "/assets/images/plant.png";
      } else if (plant.plantType === "딸기") {
        imageSrc = "/assets/images/strawberry.png";
      }
      return (
        <PlantCard key={index}>
          <Link to={`/profile?plantId=${plant.id}`}>
            <ImgBox>
              <PlantImg src={imageSrc} alt="plant" />
              <CharacterName>{plant.name}</CharacterName>
              <Level>Lv.1</Level>
            </ImgBox>
          </Link>
        </PlantCard>
      );
    } else {
      // 식물 데이터가 없는 경우
      return (
        <PlantCard key={index}>
          <Link to="/addplant">
            <FcPlus size="60" />
          </Link>
        </PlantCard>
      );
    }
  };

  return (
    <MyPlantBackGround>
      <Header>
        <Text>내 식물들</Text>
        <Link to="/setting">
          <IoMdSettings size="40" />
        </Link>
      </Header>
      <Container>{Array.from({ length: 2 }, (_, i) => renderPlantOrAddLink(i))}</Container>
      <Container>{Array.from({ length: 2 }, (_, i) => renderPlantOrAddLink(i + 2))}</Container>
    </MyPlantBackGround>
  );
};

export const MyPlantBackGround = styled.div`
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

export const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const Container = styled.div`
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
  justify-content: center; /* 중앙 정렬을 위해 추가 */
  align-items: center; /* 중앙 정렬을 위해 추가 */
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

export const CharacterName = styled.span`
  margin: 5px 5px 0px 5px;
  font-weight: 500;
`;

export const Level = styled.span`
  font-weight: 400;
  font-size: 12px;
`;

export default MyPlant;

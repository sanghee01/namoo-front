import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { FcPlus } from "react-icons/fc";
import { useRecoilState, useRecoilValue } from "recoil";
import { IoMdSettings } from "react-icons/io";
import { plantLevelState, plantListState } from "../../state/plantState";
import { plantState } from "../../state/plantState";
import { useEffect, useCallback, useState } from "react";
import { usePlantList } from "../../hooks/useGetPlantList";
import { plantImgState } from "../../state/plantState";

const MyPlant = () => {
  const getPlantList = usePlantList(); 
  const plantList = useRecoilValue(plantListState);
  const [plant, setPlant] = useRecoilState(plantState);
  const [plantImg, setPlantImg] = useRecoilState(plantImgState);
  const [plantLevel, setPlantLevel] = useRecoilState(plantLevelState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPlantList = async () => {
      await getPlantList();
      setIsLoading(false); // 로딩 완료
    };
  
    if (!plantList || plantList.length === 0) {
      fetchPlantList();
    } else {
      setIsLoading(false); // plantList가 존재하면 로딩 완료
    }
  }, []);

  // 경험치에 따른 식물 레벨 설정
  useEffect(() => {
    if (plant.exp >= 400) {
      setPlantLevel(4);
    } else if (plant.exp >= 300) {
      setPlantLevel(3);
    } else if (plant.exp >= 200) {
      setPlantLevel(2);
    }
  }, [plant.exp, setPlantLevel]);

  // 식물 리스트와 레벨에 따른 이미지 설정
  useEffect(() => {
    if (plantList.length > 0 && plantLevel) {
      plantList.forEach((plant) => {
        if (plant.plantType === "상추") {
          setPlantImg(`/assets/images/lettuce${plantLevel}.png`);
        } else if (plant.plantType === "딸기") {
          setPlantImg("/assets/images/strawberry.png");
        }
      });
    }
  }, [plantList, plantLevel, setPlantImg]);

  // plantList 업데이트 확인
  useEffect(() => {
    console.log('plantList:', plantList);
  }, [plantList]);

  const handlePickPlant = useCallback((index : number) => {
    const selectedPlant = plantList[index];
    setPlant({
      id: selectedPlant.id,
      name: selectedPlant.name,
      exp: selectedPlant.exp,
      plantType: selectedPlant.plantType,
      uuid: selectedPlant.uuid,
      giveWater: selectedPlant.giveWater,
      createDate: selectedPlant.createDate,
    });
  }, [plantList, setPlant]);

  const renderPlantOrAddLink = useCallback((index : number) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (plantList.length > index) {
      const plant = plantList[index];
      return (
        <PlantCard onClick={() => handlePickPlant(index)} key={index}>
          <Link to={`/profile?plantId=${plant.id}`}>
            <ImgBox>
              <PlantImg src={plantImg} alt="plant" />
              <CharacterName>{plant.name}</CharacterName>
              <Level>Lv.{plantLevel}</Level>
            </ImgBox>
          </Link>
        </PlantCard>
      );
    } else {
      return (
        <PlantCard key={index}>
          <Link to="/addplant">
            <FcPlus size="60" />
          </Link>
        </PlantCard>
      );
    }
  }, [plantList, plantImg, plantLevel, handlePickPlant]);

  return (
    <MyPlantBackGround>
      <Header>
        <Text>내 식물들</Text>
        <Link to="/setting">
          <IoMdSettings size="40" />
        </Link>
      </Header>
      {!isLoading && (
      <>
        <Container>
          {Array.from({ length: 2 }, (_, i) => renderPlantOrAddLink(i))}
        </Container>
        <Container>
          {Array.from({ length: 2 }, (_, i) => renderPlantOrAddLink(i + 2))}
        </Container>
      </>
    )}

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
  height: 180px;
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

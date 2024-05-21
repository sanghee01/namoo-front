import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcPlus } from "react-icons/fc";
import { useRecoilState, useRecoilValue } from "recoil";
import { AiFillSetting } from "react-icons/ai";
import { plantListState } from "../../state/plantState";
import { plantState } from "../../state/plantState";
import { userState } from "../../state/userState";
import { useEffect, useCallback, useRef } from "react";
import { usePlantList } from "../../hooks/useGetPlantList";

const MyPlant = () => {
  const getPlantList = usePlantList(); 
  const user = useRecoilValue(userState); // userState에서 유저 정보 불러오기
  const plantList = useRecoilValue(plantListState);
  const [, setPlant] = useRecoilState(plantState);
  const isFetchedRef = useRef(false);


  useEffect(() => {
    const fetchPlantList = async () => {
      if (user && !isFetchedRef.current) {
        await getPlantList();
        isFetchedRef.current = true;
      }
    };
  
    fetchPlantList();
  }, [user, getPlantList]);
  

  useEffect(() => {
    console.log('plantList:', plantList);
  }, []);

  const handlePickPlant = useCallback(
    (index: number) => {
      const selectedPlant = plantList[index];
      setPlant({
        id: selectedPlant.id,
        name: selectedPlant.name,
        exp: selectedPlant.exp,
        level: selectedPlant.level,
        plantType: selectedPlant.plantType,
        uuid: selectedPlant.uuid,
        giveWater: selectedPlant.giveWater,
        createDate: selectedPlant.createDate,
        imgPath: selectedPlant.imgPath,
      });
    },
    [plantList, setPlant],
  );

  const renderPlantOrAddLink = useCallback(
    (index: number) => {
      if (plantList.length > index) {
        const plant = plantList[index];

        return (
          <PlantCard onClick={() => handlePickPlant(index)} key={index}>
            <Link to={`/profile?plantId=${plant.id}`}>
              <ImgBox>
                <PlantImg src={plant.imgPath} alt="plant" />
                <CharacterName>{plant.name}</CharacterName>
                <Level>Lv.{plant.level}</Level>
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
    },

    [plantList, handlePickPlant]
  );

  return (
    <MyPlantBackGround>
      <Header>
        <Text>내 식물들</Text>
        <Link to="/setting">
          <AiFillSetting size="40" />
        </Link>
      </Header>
      <Container>
        {Array.from({ length: 2 }, (_, i) => renderPlantOrAddLink(i))}
      </Container>
      <Container>
        {Array.from({ length: 2 }, (_, i) => renderPlantOrAddLink(i + 2))}
      </Container>
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
  height: 150px;
`;

export const CharacterName = styled.span`
  font-weight: 500;
`;

export const Level = styled.span`
  font-weight: 400;
  font-size: 12px;
`;

export default MyPlant;

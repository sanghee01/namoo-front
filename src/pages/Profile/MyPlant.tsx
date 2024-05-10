import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcPlus } from "react-icons/fc";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilValue } from "recoil";
import { userState } from "../../state/authState";
import { IoMdSettings } from "react-icons/io";

interface Plant {
  id: string;
  name: string;
  plantType: string;
}

const MyPlant = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const user = useRecoilValue(userState); // Recoil을 통해 userState에서 사용자 정보 가져오기

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        if (user && user.token) {
          const response = await axios.get(`${import.meta.env.VITE_SERVER_APIADDRESS}/plant`, {
            headers: {
              'Authorization': `Bearer ${user.token}`,
            },
          });
          setPlants(response.data.content.slice(0, 4)); // 최대 4개의 식물 정보만 가져옴
        }
      } catch (error) {
        console.error('식물 정보를 불러오는 중 에러 발생:', error);
      }
    };

    fetchPlants();
  }, [user]);

  // 식물 카드 또는 추가 링크를 렌더링하는 함수
  const renderPlantOrAddLink = (index: number) => {
    // 식물 데이터가 있는 경우
    if (plants.length > index) {
      const plant = plants[index];
      let imageSrc = '/assets/images/logoimg1.png'; // 기본 이미지
      if (plant.plantType === '상추') {
        imageSrc = '/assets/images/plant.png';
      } else if (plant.plantType === '딸기') {
        imageSrc = '/assets/images/strawberry.png';
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
    } else { // 식물 데이터가 없는 경우
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

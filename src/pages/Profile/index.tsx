import { IoMdSettings } from "react-icons/io";
import { IoMdBookmarks } from "react-icons/io";
import { IoIosTrophy } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import Demo from "../../components/Heatmap";
import {
  ProfileBackGround,
  Header,
  Text,
  Main,
  ProfileCard,
  ProfileBox,
  DetailBox,
  PlantImg,
  Level,
  CharacterName,
  BtnContainer,
  BtnBox,
  TextBox,
  IconBox,
  QuestBox,
  Container,
} from "./styles";
import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilValue } from "recoil";
import { userState } from "../../state/authState";

// Props 타입 정의
interface ProfileProps {
  plantId: string;
}
const Profile: React.FC<ProfileProps> = ({ plantId }) => {
  const [characterName, setCharacterName] = useState('');
  const user = useRecoilValue(userState); // Recoil을 통해 userState에서 사용자 정보 가져오기

  useEffect(() => {
    const fetchPlantData = async () => {
      try {
        // user가 있을 경우에만 요청 실행
        if (user && user.token) {
          const response = await axios.get(`${import.meta.env.VITE_SERVER_APIADDRESS}/plant/${plantId}`, {
            headers: {
              'Authorization': `Bearer ${user.token}`, // 토큰을 헤더에 추가
            },
          });
          setCharacterName(response.data.content.name); // 식물 이름을 상태에 저장
        }
      } catch (error) {
        console.error('식물 데이터를 가져오는 중 에러가 발생했습니다:', error);
      }
    };

    if (plantId) {
      fetchPlantData();
    }
  }, [plantId, user]); 

  useEffect(() => {
    console.log(characterName); // characterName 상태가 변경될 때마다 콘솔에 출력
  }, [characterName]); // characterName이 변경될 때만 이 useEffect를 실행합니다.

  return (
    <ProfileBackGround>
      <Header>
        <Container>
          <Link to="/myplant">
            <MdArrowBackIos size="30" />
          </Link>
          <Text>식물이야기</Text>
        </Container>
      </Header>
      <Main>
        <ProfileCard>
          <ProfileBox>
            <PlantImg src="/assets/images/plant.png" alt="plant" />
            <CharacterName>{characterName}</CharacterName>
            <Level>Lv.1</Level>
          </ProfileBox>
          <DetailBox>
            <Text>2024.04.06</Text>
            <span>생년월일</span>
          </DetailBox>
          <DetailBox>
            <Text>98%</Text>
            <span>애정도</span>
          </DetailBox>
          <DetailBox>
            <Text>생명수가 필요해!</Text>
            <span>오늘의 한마디</span>
          </DetailBox>
        </ProfileCard>
        <BtnContainer>
          <BtnBox>
            <Link to="/encyclopedia">
              <TextBox>
                <Text>식물도감</Text>
              </TextBox>
              <IconBox>
                <IoMdBookmarks color="#a8511c" size="80" />
              </IconBox>
            </Link>
          </BtnBox>
          <BtnBox>
            <Link to="/achievement">
              <TextBox>
                <Text>명예의 전당</Text>
              </TextBox>
              <IconBox>
                <IoIosTrophy color="#ffc400" size="80"  />
              </IconBox>
            </Link>
          </BtnBox>
        </BtnContainer>
        <QuestBox>
          <Demo />
        </QuestBox>
      </Main>
    </ProfileBackGround>
  );
};

export default Profile;

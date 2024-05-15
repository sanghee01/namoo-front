import { IoMdBookmarks } from "react-icons/io";
import { IoIosTrophy } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Demo from "../../components/Heatmap";
import {
  ProfileBackGround,
  Header,
  Text,
  SettingBox,
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
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "../../state/userState";
import { useLocation } from "react-router-dom";
import { plantLevelState } from "../../state/plantState";

const Profile: React.FC = () => {
  const [characterName, setCharacterName] = useState("");
  const [characterDate, setCharacterDate] = useState("");
  const [characterImage, setCharacterImage] = useState("");

  const user = useRecoilValue(userState);
  const plantLevel = useRecoilValue(plantLevelState);

  const location = useLocation();

  // URL에서 plantId 쿼리 파라미터 읽기
  const queryParams = new URLSearchParams(location.search);
  const plantId = queryParams.get("plantId");

  useEffect(() => {
    const fetchPlantData = async () => {
      // user가 있을 경우에만 요청 실행
      if (user && user.accessToken) {
        try {
          const response = await axios.get(`${import.meta.env.VITE_SERVER_APIADDRESS}/plant/${plantId}`, {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          });
          setCharacterName(response.data.content.name);
          setCharacterDate(response.data.content.createDate);
          // plantType에 따라 characterImage 설정
          const plantType = response.data.content.plantType;
          if (plantType === "상추") {
            setCharacterImage(`/assets/images/lettuce${plantLevel}.png`);
          } else if (plantType === "딸기") {
            setCharacterImage("/assets/images/strawberry.png");
          } else {
            // 기본 이미지 또는 다른 타입의 식물 이미지 설정
            setCharacterImage("/assets/images/lettuce1.png");
          }
        } catch (error) {
          console.error("식물 데이터를 가져오는 중 에러가 발생했습니다:", error);
        }
      }
    };

    if (plantId) {
      fetchPlantData();
    }
  }, [plantId, user]);

  return (
    <ProfileBackGround>
      <Header>
        <Container>
          <Link to="/myplant">
            <MdArrowBackIos size="30" />
          </Link>
          <Text>식물이야기</Text>
        </Container>
        <SettingBox>
          <Link to="/setting">
            <MdDeleteForever size="40" />
          </Link>
        </SettingBox>
      </Header>
      <Main>
        <ProfileCard>
          <ProfileBox>
            <PlantImg src={characterImage} alt="plant" />
            <CharacterName>{characterName}</CharacterName>
            <Level>Lv.{plantLevel}</Level>
          </ProfileBox>
          <DetailBox>
            <Text>{characterDate}</Text>
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
                <IoIosTrophy color="#ffc400" size="80" />
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

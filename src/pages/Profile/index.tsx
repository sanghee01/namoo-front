import { IoMdBookmarks, IoIosTrophy } from "react-icons/io";
import { MdArrowBackIos, MdDeleteForever } from "react-icons/md";
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
import { useRecoilValue, useRecoilState } from "recoil";
import { userState } from "../../state/userState";
import { useLocation } from "react-router-dom";
import { plantLevelState, plantImgState, plantState, todayMessageState } from "../../state/plantState";

const Profile: React.FC = () => {
  const user = useRecoilValue(userState);
  const plantLevel = useRecoilValue(plantLevelState);
  const plantImg = useRecoilValue(plantImgState); 
  const plant = useRecoilValue(plantState);
  const [todayMessage, setTodayMessage] = useRecoilState(todayMessageState);


  const location = useLocation();

  // URL에서 plantId 쿼리 파라미터 읽기
  const queryParams = new URLSearchParams(location.search);
  const plantId = queryParams.get("plantId");

  useEffect(() => {
    const fetchPlantData = async () => {
      // user가 있을 경우에만 요청 실행
      if (user && user.accessToken && plantId) {
        try {
          const response = await axios.get(`${import.meta.env.VITE_SERVER_APIADDRESS}/plant/${plantId}`, {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          });

	// 식물 데이터 가져오기
      const historyResponse = await axios.get(`${import.meta.env.VITE_SERVER_APIADDRESS}/plant-history/${plantId}`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      console.log(historyResponse.data);

          
          // soilHumidity에 따른 메시지 설정
          const { soilHumidity } = historyResponse.data.content.content[0];
          if (soilHumidity < 500) {
            setTodayMessage("생명수가 필요해!");
          } else if (soilHumidity >= 500 && soilHumidity < 1000) {
            setTodayMessage("아이 촉촉해~");
          } else {
            setTodayMessage("혹시 여기 수영장?");
          }
        } catch (error) {
          console.error("데이터를 가져오는 중 에러가 발생했습니다:", error);
        }
      }
    };

    fetchPlantData();
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
            <PlantImg src={plantImg} alt="plant" />
            <CharacterName>{plant.name}</CharacterName>
            <Level>Lv.{plantLevel}</Level>
          </ProfileBox>
          <DetailBox>
            <Text>{plant.createDate}</Text>
            <span>생년월일</span>
          </DetailBox>
          <DetailBox>
            <Text>98%</Text>
            <span>애정도</span>
          </DetailBox>
          <DetailBox>
            <Text>{todayMessage}</Text>
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

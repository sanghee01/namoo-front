import { FaBookBookmark } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa";
import { IoChevronBackOutline } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
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
import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import { userState } from "../../state/userState";
import { useLocation, useNavigate } from "react-router-dom";
import { plantLevelState, plantImgState, plantState, todayMessageState } from "../../state/plantState";
import { errorAlert, successAlert, Confirm } from "../../components/Alert";
import { usePlantList } from "../../hooks/useGetPlantList";




const Profile: React.FC = () => {
  const user = useRecoilValue(userState);
  const plantLevel = useRecoilValue(plantLevelState);
  const plantImg = useRecoilValue(plantImgState);
  const plant = useRecoilValue(plantState);
  const [todayMessage, setTodayMessage] = useRecoilState(todayMessageState);

  const location = useLocation();
  const navigate = useNavigate();

  // URL에서 plantId 쿼리 파라미터 읽기
  const queryParams = new URLSearchParams(location.search);
  const plantId = queryParams.get("plantId");
  const fetchPlantList = usePlantList(); // 식물 목록을 가져오는 훅


  useEffect(() => {
    const fetchPlantData = async () => {
      // user가 있을 경우에만 요청 실행
      if (user && user.accessToken && plantId) {
        try {
          await axios.get(`${import.meta.env.VITE_SERVER_APIADDRESS}/plant/${plantId}`, {
            headers: {
              Authorization: `Bearer ${user.accessToken}`,
            },
          });

          // 식물 데이터 가져오기
          const historyResponse = await axios.get(
            `${import.meta.env.VITE_SERVER_APIADDRESS}/plant-history/${plantId}`,
            {
              headers: {
                Authorization: `Bearer ${user.accessToken}`,
              },
            },
          );
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

  const handleDeletePlant = async (e: React.MouseEvent<EventTarget>) => {
    e.preventDefault();

    const isConfirmedDelete = await Confirm("정말로 식물을 삭제하시겠습니까?");
    if (user && user.accessToken && plantId && isConfirmedDelete) {
      try {
        await axios.delete(`${import.meta.env.VITE_SERVER_APIADDRESS}/plant/${plantId}`, {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        });
        await successAlert("식물이 삭제되었습니다.");
        navigate("/myplant");
      } catch (error) {
        console.error("식물 삭제 중 에러가 발생했습니다:", error);
        await errorAlert("식물을 삭제하는데 실패했습니다.");
      }
    }
  };

  return (
    <ProfileBackGround>
      <Header>
        <Container>
          <Link to="/myplant">
            <IoChevronBackOutline size="30" />
          </Link>
          <Text>식물이야기</Text>
        </Container>
        <SettingBox>
            <RiDeleteBin6Fill size="40" onClick={handleDeletePlant} />
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
            <Text>{plant.exp}%</Text>
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
                <FaBookBookmark color="#a8511c" size="80" />
              </IconBox>
            </Link>
          </BtnBox>
          <BtnBox>
            <Link to="/achievement">
              <TextBox>
                <Text>명예의 전당</Text>
              </TextBox>
              <IconBox>
                <FaTrophy color="#ffc400" size="80" />
              </IconBox>
            </Link>
          </BtnBox>
        </BtnContainer>
        <QuestBox></QuestBox>
      </Main>
    </ProfileBackGround>
  );
};

export default Profile;

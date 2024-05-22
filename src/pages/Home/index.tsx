import { BiSolidBell } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { BsCameraFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import {
  HomeBackGround,
  Header,
  NotificationBox,
  FriendshipBar,
  Main,
  CharacterBox,
  Character,
  PlantImg,
  TableImg,
  LevelImg,
  SideBar,
  NotificationModalBox,
  NoNotification,
  NotificationHeader,
  NotificationBody,
  QuestModalBox,
  QuestModalCloseBtn,
  CharacterName,
  HeartImage,
} from "./styles";
import { plantState } from "../../state/plantState";
import { useRecoilState, useRecoilValue } from "recoil";
import { useCallback, useEffect, useState } from "react";
import { questState } from "../../state/questState";
import QuestModal from "../../components/QuestModal";
import { useNavigate } from "react-router";
import { useGetQuest } from "../../hooks/useQuest";
import { successAlert, warningAlert } from "../../components/Alert";
import { useDeleteAllNotification, useGetCountNotification, useGetNotification } from "../../hooks/useNotification";
import NotificationModal from "../../components/NotificationModal";
import { notificationState } from "../../state/notificationState";
import { usePlantGiveWater } from "../../hooks/usePlantGiveWater";

interface Heart {
  id: number;
  x: number;
  y: number;
}

const Home = () => {
  const navegate = useNavigate();
  const getQuest = useGetQuest();
  const getNotification = useGetNotification();
  const getCountNotification = useGetCountNotification();
  const deleteAllNotifiction = useDeleteAllNotification();
  const giveWater = usePlantGiveWater();

  const [plant, setPlant] = useRecoilState(plantState);
  const questList = useRecoilValue(questState);
  const notificationList = useRecoilValue(notificationState);

  const [isOpenQuest, setIsOpenQuest] = useState(false);
  const [isOpenNotification, setIsNotification] = useState(false);
  const [isThereNotifications, setIsThereNotifications] = useState(true);
  const [growthGauge, setGrowthGauge] = useState(0);
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [countNotification, setCountNotification] = useState(0);

  useEffect(() => {
    const fetchCountNotification = async () => {
      try {
        const count = await getCountNotification();
        setCountNotification(count);
      } catch (error) {
        console.error("Error fetching count notification:", error);
      }
    };
    fetchCountNotification();
  }, [getCountNotification]);

  // 식물 정보 변동 시 모든 값 업데이트
  useEffect(() => {
    setPlant({
      id: plant.id,
      name: plant.name,
      exp: plant.exp,
      level: plant.level,
      plantType: plant.plantType,
      uuid: plant.uuid,
      giveWater: plant.giveWater,
      createDate: plant.createDate,
      imgPath: plant.imgPath,
    });
  }, [
    plant.createDate,
    plant.exp,
    plant.giveWater,
    plant.id,
    plant.imgPath,
    plant.level,
    plant.name,
    plant.plantType,
    plant.uuid,
    setPlant,
  ]);

  // 퀘스트 모달 열기
  const handleOpenQuest = () => {
    setIsOpenQuest(true);
    getQuest();
  };

  // 퀘스트 모달 닫기
  const handleCloseQuest = () => {
    setIsOpenQuest(false);
  };

  // 알림창 열기
  const handleOpenNotificaition = () => {
    setIsNotification(true);
    getNotification();
    getCountNotification();
  };

  // 알림창 닫기
  const handleCloseNotificaition = () => {
    setIsNotification(false);
  };

  // 알림 전체 삭제
  const handleDeleteAllNotification = () => {
    deleteAllNotifiction();
    setIsThereNotifications(false); // 삭제되면 바로 안보이도록 설정하기 위함
  };

  // 원격 물 주기
  const handleGiveWater = useCallback(async () => {
    try {
      await giveWater(plant.id);
      await successAlert("물 주기 성공!");
    } catch (error: any) {
      await warningAlert(error.response.data.message);
    }
  }, [giveWater, plant.id]);

  // 성장도 게이지
  useEffect(() => {
    if (plant.exp >= 100) {
      setGrowthGauge(plant.exp - 100 * Math.floor(plant.exp / 100));
    } else {
      setGrowthGauge(plant.exp);
    }
  }, [plant.exp]);

  // 화면 클릭시 하트
  const handleClickHeartEffect = (e: React.MouseEvent<HTMLDivElement>) => {
    const newHeart = {
      id: Date.now(),
      x: e.clientX - 25,
      y: e.clientY - 25,
    };
    setHearts((prevHearts) => [...prevHearts, newHeart]);

    setTimeout(() => {
      setHearts((prevHearts) => prevHearts.filter((heart) => heart.id !== newHeart.id));
    }, 1000);
  };

  return (
    <HomeBackGround>
      <Header>
        <FriendshipBar>
          <FaHeart color="#b72020" size="30" />
          <progress value={growthGauge} max="100"></progress>
        </FriendshipBar>
        <NotificationBox>
          <BiSolidBell onClick={handleOpenNotificaition} color="#ffc400" size="38" />
          <span>{countNotification}</span>
        </NotificationBox>
      </Header>
      <Main>
        <CharacterBox>
          <TableImg src="/assets/images/table.png" alt="plant" />
          <Character onClick={handleClickHeartEffect}>
            <PlantImg src={plant.imgPath} alt="plant" />
            <div>
              <LevelImg src={`/assets/images/level${plant.level}.png`} alt="level" />
              <CharacterName>{plant.name}</CharacterName>
            </div>
          </Character>
        </CharacterBox>
        <SideBar>
          <div>
            <FaBook onClick={handleOpenQuest} color="#a8511c" size="40" />
            <span>퀘스트</span>
          </div>
          <div onClick={handleGiveWater}>
            <IoIosWater color="#13b5d6" size="40" />
            <span>물주기</span>
          </div>
          <div onClick={() => navegate("/check-disease")}>
            <BsCameraFill color="#555555" size="40" />
            <span>질병확인</span>
          </div>
        </SideBar>
        {isOpenNotification && (
          <NotificationModalBox>
            <NotificationHeader>
              <header>
                <h3>알림</h3>
                <div>
                  <span onClick={handleDeleteAllNotification}>전체 삭제</span>
                  <IoClose onClick={handleCloseNotificaition} />
                </div>
              </header>
            </NotificationHeader>
            <NotificationBody>
              {isThereNotifications && notificationList.length > 0 ? (
                notificationList.map((notification) => {
                  return (
                    <NotificationModal
                      key={notification.id}
                      id={notification.id}
                      description={notification.description}
                      link={notification.link}
                      isRead={notification.isRead}
                      notificationType={notification.notificationType}
                      createdDate={notification.createdDate}
                      handleCloseNotificaition={handleCloseNotificaition}
                      handleOpenQuest={handleOpenQuest}
                    />
                  );
                })
              ) : (
                <NoNotification>알림이 없습니다.</NoNotification>
              )}
            </NotificationBody>
          </NotificationModalBox>
        )}
        {isOpenQuest && (
          <QuestModalBox>
            <h3>주간 퀘스트</h3>
            <div>
              {questList.map((quest) => {
                return (
                  <QuestModal
                    key={quest.questId}
                    questId={quest.questId}
                    title={quest.title}
                    description={quest.description}
                    progress={quest.progress}
                    goal={quest.goal}
                    reward={quest.reward}
                    completed={quest.completed}
                    accepted={quest.accepted}
                  />
                );
              })}
            </div>
            <QuestModalCloseBtn onClick={handleCloseQuest}>닫기</QuestModalCloseBtn>
          </QuestModalBox>
        )}
      </Main>
      {hearts.map((heart) => (
        <HeartImage key={heart.id} style={{ left: `${heart.x}px`, top: `${heart.y}px` }} />
      ))}
    </HomeBackGround>
  );
};

export default Home;

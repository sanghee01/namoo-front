import { BiSolidBell } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { BsCameraFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import {
  HomeBackGround,
  Header,
  FriendshipBar,
  Main,
  CharacterBox,
  Character,
  PlantImg,
  TableImg,
  LevelImg,
  SideBar,
  CharacterName,
  NotificationModalBox,
  NoNotification,
  QuestModalBox,
  QuestModalCloseBtn,
} from "./styles";
import { plantLevelState, plantState } from "../../state/plantState";
import { useRecoilValue } from "recoil";
import { useCallback, useState } from "react";
import { questState } from "../../state/questState";
import QuestModal from "../../components/QuestModal";
import { useNavigate } from "react-router";
import { useGetQuest } from "../../hooks/useQuest";
import { successAlert, warningAlert } from "../../components/Alert";
import { useDeleteAllNotification, useGetNotification } from "../../hooks/useNotification";
import NotificationModal from "../../components/NotificationModal";
import { notificationState } from "../../state/notificationState";
import { usePlantGiveWater } from "../../hooks/usePlantGiveWater";

const Home = () => {
  const navegate = useNavigate();
  const getQuest = useGetQuest();
  const getNotification = useGetNotification();
  const deleteAllNotifiction = useDeleteAllNotification();
  const giveWater = usePlantGiveWater();

  const plant = useRecoilValue(plantState);
  const plantLevel = useRecoilValue(plantLevelState);
  const questList = useRecoilValue(questState);
  const notificationList = useRecoilValue(notificationState);

  const [isOpenQuest, setIsOpenQuest] = useState(false);
  const [isOpenNotification, setIsNotification] = useState(false);
  const [isThereNotifications, setIsThereNotifications] = useState(true);
  // 퀘스트 모달 열기
  const handleOpenQuest = () => {
    setIsOpenQuest(true);
    getQuest();
  };

  // 퀘스트 모달 닫기
  const handleCloseModal = () => {
    setIsOpenQuest(false);
  };

  // 알림창 열기
  const handleOpenNotificaition = () => {
    setIsNotification(true);
    getNotification();
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
  }, [plant.id]);

  return (
    <HomeBackGround>
      <Header>
        <FriendshipBar>
          <FaHeart color="#b72020" size="30" />
          <progress value={plant.exp} max="400"></progress>
        </FriendshipBar>
        <BiSolidBell onClick={handleOpenNotificaition} color="#ffc400" size="40" />
      </Header>
      <Main>
        <CharacterBox>
          <TableImg src="/assets/images/table.png" alt="plant" />
          <Character>
            <PlantImg src={plant.imgPath} alt="plant" />
            <div>
              <LevelImg src={`/assets/images/level${plantLevel}.png`} alt="level" />
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
            <header>
              <h3>알림</h3>
              <div>
                <span onClick={handleDeleteAllNotification}>전체 삭제</span>
                <IoClose onClick={handleCloseNotificaition} />
              </div>
            </header>
            <div>
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
                    />
                  );
                })
              ) : (
                <NoNotification>알림이 없습니다.</NoNotification>
              )}
            </div>
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
            <QuestModalCloseBtn onClick={handleCloseModal}>닫기</QuestModalCloseBtn>
          </QuestModalBox>
        )}
      </Main>
    </HomeBackGround>
  );
};

export default Home;

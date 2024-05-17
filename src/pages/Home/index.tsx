import { BiSolidBell } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { BsCameraFill } from "react-icons/bs";
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
  Modal,
  ModalCloseBtn,
} from "./styles";
import { plantLevelState, plantState } from "../../state/plantState";
import { useRecoilValue } from "recoil";
import { plantImgState } from "../../state/plantState";
import { useCallback, useState } from "react";
import { questState } from "../../state/questState";
import QuestModal from "../../components/QuestModal";
import { giveWaterToPlant } from "../../services/plantApi";
import { useNavigate } from "react-router";
import { useGetQuest } from "../../hooks/useQuest";

const Home = () => {
  const navegate = useNavigate();
  const getQuest = useGetQuest();

  const plant = useRecoilValue(plantState);
  const plantImg = useRecoilValue(plantImgState);
  const plantLevel = useRecoilValue(plantLevelState);
  const questList = useRecoilValue(questState);

  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log("questList", questList);

  // 퀘스트 모달 열기
  const handleOpenModal = () => {
    setIsOpenModal(true);
    getQuest();
  };

  // 퀘스트 모달 닫기
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  // 원격 물 주기
  const handleGiveWater = useCallback(async () => {
    try {
      await giveWaterToPlant(plant.id);
      alert("물 주기 성공!");
    } catch (error: any) {
      alert(error.response.data.message);
    }
  }, [plant.id]);

  return (
    <HomeBackGround>
      <Header>
        <FriendshipBar>
          <FaHeart color="#b72020" size="30" />
          <progress value={plant.exp} max="400"></progress>
        </FriendshipBar>
        <BiSolidBell color="#ffc400" size="40" />
      </Header>
      <Main>
        <CharacterBox>
          <TableImg src="/assets/images/table.png" alt="plant" />
          <Character>
            <PlantImg src={plantImg} alt="plant" />
            <div>
              <LevelImg src={`/assets/images/level${plantLevel}.png`} alt="level" />
              <CharacterName>{plant.name}</CharacterName>
            </div>
          </Character>
        </CharacterBox>
        <SideBar>
          <div>
            <FaBook onClick={handleOpenModal} color="#a8511c" size="40" />
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
        {isOpenModal && (
          <Modal>
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
            <ModalCloseBtn onClick={handleCloseModal}>닫기</ModalCloseBtn>
          </Modal>
        )}
      </Main>
    </HomeBackGround>
  );
};

export default Home;

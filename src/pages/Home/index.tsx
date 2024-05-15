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
import { useRecoilState, useRecoilValue } from "recoil";
import { plantImgState } from "../../state/plantState";
import { useCallback, useEffect, useState } from "react";
import { getQuest } from "../../services/questApi";
import { questState } from "../../state/questState";
import QuestModal from "../../components/QuestModal";

const Home = () => {
  const plant = useRecoilValue(plantState);
  const plantImg = useRecoilValue(plantImgState);

  const [questList, setQuestList] = useRecoilState(questState);
  const [plantLevel, setPlantLevel] = useRecoilState(plantLevelState);

  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log("questList", questList);

  // 퀘스트 리스트 가져오기
  const handleGetQuest = useCallback(async () => {
    try {
      const response = await getQuest();
      setQuestList(response);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  }, [setQuestList]);

  // 경험치에 따른 식물 레벨 적용
  useEffect(() => {
    if (plant.exp >= 100) {
      setPlantLevel(2);
    } else if (plant.exp >= 200) {
      setPlantLevel(3);
    } else if (plant.exp >= 300) {
      setPlantLevel(4);
    }
  }, [plant.exp, setPlantLevel]);

  // 퀘스트 모달 열기
  const handleOpenModal = () => {
    setIsOpenModal(true);
    handleGetQuest();
  };

  // 퀘스트 모달 닫기
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

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
            <FaBook onClick={() => handleOpenModal()} color="#a8511c" size="40" />
            <span>퀘스트</span>
          </div>
          <div>
            <IoIosWater color="#13b5d6" size="40" />
            <span>물주기</span>
          </div>
          <div>
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

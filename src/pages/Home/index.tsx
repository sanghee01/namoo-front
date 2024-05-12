import { BiSolidBell } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { GiHealthNormal } from "react-icons/gi";
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
} from "./styles";
import { useEffect } from "react";
import { usePlantList } from "../../hooks/useGetPlantList";
import { plantState } from "../../state/plantState";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const getPlantList = usePlantList(); // usePlantList 훅 사용
  const plantList = useRecoilValue(plantState);

  useEffect(() => {
    async function fetchPlantList() {
      await getPlantList(); // 식물 리스트 가져오기
      console.log("식물리스트", plantList);
      if (!plantList || plantList.length === 0) {
        navigate("/addplant");
      }
    }
    fetchPlantList();
  }, []);

  return (
    <HomeBackGround>
      <Header>
        <FriendshipBar>
          <FaHeart color="#b72020" size="30" />
          <progress value="80" max="100"></progress>
        </FriendshipBar>
        <BiSolidBell color="#ffc400" size="40" />
      </Header>
      <Main>
        <CharacterBox>
          <TableImg src="/assets/images/table.png" alt="plant" />
          <Character>
            <PlantImg src="/assets/images/plant.png" alt="plant" />
            <div>
              <LevelImg src="/assets/images/level5.png" alt="level" />
              <CharacterName>귀염뽀짝상추</CharacterName>
            </div>
          </Character>
        </CharacterBox>
        <SideBar>
          <div>
            <FaBook color="#a8511c" size="40" />
            <span>퀘스트</span>
          </div>
          <div>
            <IoIosWater color="#13b5d6" size="40" />
            <span>물주기</span>
          </div>
          <div>
            <GiHealthNormal color="#ff600a" size="40" />
            <span>영양제</span>
          </div>
          <div>
            <BsCameraFill color="#555555" size="40" />
            <span>질병확인</span>
          </div>
        </SideBar>
      </Main>
    </HomeBackGround>
  );
};

export default Home;

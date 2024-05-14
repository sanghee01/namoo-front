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
} from "./styles";
import { plantState } from "../../state/plantState";
import { useRecoilValue } from "recoil";
import { plantImgState } from "../../state/plantState";

const Home = () => {
  const plant = useRecoilValue(plantState);
  const plantImg = useRecoilValue(plantImgState);

  return (
    <HomeBackGround>
      <Header>
        <FriendshipBar>
          <FaHeart color="#b72020" size="30" />
          <progress value={plant.exp} max="100"></progress>
        </FriendshipBar>
        <BiSolidBell color="#ffc400" size="40" />
      </Header>
      <Main>
        <CharacterBox>
          <TableImg src="/assets/images/table.png" alt="plant" />
          <Character>
            <PlantImg src={plantImg} alt="plant" />
            <div>
              <LevelImg src={`/assets/images/level${1}.png`} alt="level" />
              <CharacterName>{plant.name}</CharacterName>
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
            <BsCameraFill color="#555555" size="40" />
            <span>질병확인</span>
          </div>
        </SideBar>
      </Main>
    </HomeBackGround>
  );
};

export default Home;

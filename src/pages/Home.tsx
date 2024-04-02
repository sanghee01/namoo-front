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
  Character,
  PlantImg,
  LevelImg,
  SideBar,
  CharacterName,
} from "../styles/HomeStyles";

const Home = () => {
  return (
    <HomeBackGround>
      <Header>
        <FriendshipBar>
          <FaHeart size="30" />
          <progress value="80" max="100"></progress>
        </FriendshipBar>
        <BiSolidBell size="40" />
      </Header>
      <Main>
        <Character>
          <PlantImg src="/assets/image/plant.png" alt="plant" />
          <div>
            <LevelImg src="/assets/image/level5.png" alt="level" />
            <CharacterName>귀염뽀짝상추</CharacterName>
          </div>
        </Character>
        <SideBar>
          <div>
            <FaBook size="40" />
            <span>퀘스트</span>
          </div>
          <div>
            <IoIosWater size="40" />
            <span>물주기</span>
          </div>
          <div>
            <GiHealthNormal size="40" />
            <span>영양제</span>
          </div>
          <div>
            <BsCameraFill size="40" />
            <span>질병확인</span>
          </div>
        </SideBar>
      </Main>
    </HomeBackGround>
  );
};

export default Home;

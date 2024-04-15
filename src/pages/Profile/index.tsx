import { IoMdSettings } from "react-icons/io";
import { IoMdBookmarks } from "react-icons/io";
import { IoIosTrophy } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
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

const Profile = () => {
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
            <IoMdSettings size="40" />
          </Link>
        </SettingBox>
      </Header>
      <Main>
        <ProfileCard>
          <ProfileBox>
            <PlantImg src="/assets/images/plant.png" alt="plant" />
            <CharacterName>귀염뽀짝상추</CharacterName>
            <Level>Lv.1</Level>
          </ProfileBox>
          <DetailBox>
            <Text>2024.04.06</Text>
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

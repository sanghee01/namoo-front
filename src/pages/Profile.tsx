import { IoMdSettings } from "react-icons/io";
import { IoMdBookmarks } from "react-icons/io";
import { IoIosTrophy } from "react-icons/io";
import Demo from "../components/Heatmap";
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
} from "../styles/ProfileStyles";


const Profile = () => {
  return (
    <ProfileBackGround>
      <Header>
        <Text>
          마이페이지
        </Text>
        <SettingBox>
          <IoMdSettings size="40"/>
        </SettingBox>  
      </Header>
      <Main>
       <ProfileCard>
        <ProfileBox>
          <PlantImg src="/assets/image/plant.png" alt="plant" />
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
        <TextBox>
         <Text>식물도감</Text>
        </TextBox>
        <IconBox>
          <IoMdBookmarks color="#a8511c" size="80"/>
        </IconBox>
       </BtnBox>
       <BtnBox>
        <TextBox>
         <Text>명예의 전당</Text>
        </TextBox>
        <IconBox>
          <IoIosTrophy color="#ffc400" size="80"/>
        </IconBox>
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

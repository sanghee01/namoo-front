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
  ProfileBox,
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
       <ProfileBox>

       </ProfileBox> 
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

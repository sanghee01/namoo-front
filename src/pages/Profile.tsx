import * as P from "../styles/ProfileStyles";
import { IoMdSettings } from "react-icons/io";
import { IoMdBookmarks } from "react-icons/io";
import { IoIosTrophy } from "react-icons/io";


const Profile = () => {
  return (
    <P.ProfileBackGround>
      <P.Header>
        <P.Text>
          마이페이지
        </P.Text>
        <P.SettingBox>
          <IoMdSettings size="40"/>
        </P.SettingBox>  
      </P.Header>
      <P.Main>
       <P.ProfileBox>

       </P.ProfileBox> 
       <P.BtnContainer>
       <P.BtnBox>
        <P.TextBox>
         <P.Text>식물도감</P.Text>
        </P.TextBox>
        <P.IconBox>
          <IoMdBookmarks color="#a8511c" size="80"/>
        </P.IconBox>
       </P.BtnBox>
       <P.BtnBox>
        <P.TextBox>
         <P.Text>명예의 전당</P.Text>
        </P.TextBox>
        <P.IconBox>
          <IoIosTrophy color="#ffc400" size="80"/>
        </P.IconBox>
       </P.BtnBox>
       </P.BtnContainer>
       <P.QuestBox>
        
       </P.QuestBox>
      </P.Main>
      
    </P.ProfileBackGround>
  );
};

export default Profile;

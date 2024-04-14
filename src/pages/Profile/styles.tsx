import styled from "styled-components";

export const ProfileBackGround = styled.div`
  flex: 1;
  position: relative;
  background-color: #fffaed;
  background-size: cover;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  height: 10%;

  svg:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const SettingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const TextBox = styled.div`
  display: flex;
  height: 50%;
  justify-content: space-between;
  align-items: flex-start;
  padding: 25px;
  flex-direction: column;
`;
export const IconBox = styled.div`
  display: flex;
  height: 50%;
  justify-content: space-between;
  align-items: flex-end;
  padding: 5px;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  position: relative;
  height: 90%;
`;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 40%;
  border-radius: 30px;
  overflow: hidden;
  background-color: #feefc6;
  margin: 10px;

  &:hover {
    border: 2px solid #f0e68c;
    cursor: pointer;
  }
`;
export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 250px;
  margin: 10px 0px 10px 10px;
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 150px;
  height: 40px;
  margin: 15px;

  span {
    font-size: 14px;
    font-weight: 500;
  }
`;
export const PlantImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const CharacterName = styled.span`
  margin: 5px 5px 0px 5px;
  font-weight: 500;
`;

export const Level = styled.span`
  font-weight: 400;
  font-size: 12px;
`;

export const BtnContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const BtnBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 90%;
  border-radius: 30px;
  background-color: #feefc6;
  margin: 10px;

  &:hover {
    border: 2px solid #f0e68c;
    cursor: pointer;
  }
`;

export const QuestBox = styled.div`
  display: flex;
  height: 22%;
  border-radius: 30px;
  background-color: #feefc6;
  margin: 10px;
  justify-content: center;
  padding: 10px;

  &:hover {
    border: 2px solid #f0e68c;
    cursor: pointer;
  }
`;
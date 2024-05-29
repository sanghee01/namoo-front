import styled from "styled-components";

export const ProfileBackGround = styled.div`
  background-color: #fffaed;
  background-size: cover;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;

  svg:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 450px) {
    padding: 15px;

    svg {
      width: 30px;
    }
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    margin-left: 5px;
    margin-top: 5px;
  }
`;

export const Text = styled.div`
  font-size: 1.2rem;
  font-weight: bold;

  @media screen and (max-width: 450px) {
    font-size: 1.1rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

export const TextBox = styled.div`
  display: flex;
  height: 50%;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px 15px 5px 25px;
  flex-direction: column;
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    padding: 5px;
  }

  @media screen and (max-width: 450px) {
    svg {
      width: 50px;
    }
  }
  @media screen and (max-width: 400px) {
    svg {
      width: 40px;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
  padding: 30px;
  padding-top: 10px;
  height: 90%;

  @media screen and (max-width: 450px) {
    padding: 20px;
    padding-top: 5px;
    gap: 15px;
  }

  @media screen and (max-width: 400px) {
    padding: 20px;
    padding-top: 5px;
    gap: 12px;
  }
`;

export const ProfileCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px;
  background-color: #feefc6;
  width: 100%;
  padding: 20px;
  height: 45%;

  @media screen and (max-width: 450px) {
    padding: 15px;
    border-radius: 20px;
    height: 40%;
  }
  @media screen and (max-width: 400px) {
    height: 45%;
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  margin: 10px 0px 10px 10px;

  @media screen and (max-width: 600px) {
    width: 120px;
    height: 170px;
  }
`;

export const DetailBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px; /* ProfileBox와의 간격 조절 */

  @media screen and (max-width: 600px) {
    align-items: center; /* 작은 화면에서는 가운데 정렬 */
    margin-left: 40px; /* ProfileBox와의 간격 조절 */
  }
`;

export const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin: 15px;

  span {
    font-size: 1rem;
    font-weight: 500;
  }

  @media screen and (max-width: 450px) {
    margin: 10px;
    span {
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
`;
export const PlantImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;

export const CharacterName = styled.span`
  font-weight: 500;
  font-size: 18px;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

export const Level = styled.span`
  font-weight: 400;
  font-size: 14px;
  padding: 0px 10px 10px 10px;

  @media screen and (max-width: 600px) {
    font-size: 12px;
    padding: 0px 10px 10px 10px;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  height: 27%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BtnBox = styled.div`
  width: 48%;
  height: 100%;
  border-radius: 30px;
  background-color: #feefc6;
  padding: 20px;

  &:hover {
    cursor: pointer;
    background-color: #e8dab4;
  }

  @media screen and (max-width: 450px) {
    width: 48%;
    border-radius: 20px;
  }

  @media screen and (max-width: 400px) {
    width: 47.5%;
    padding: 10px;
  }
`;

// isCheckedIn prop의 타입을 정의합니다.
export interface QuestBoxProps {
  $isCheckedIn: boolean;
}

// QuestBox 컴포넌트에 QuestBoxProps 인터페이스를 사용하여 타입을 지정합니다.
export const QuestBox = styled.div<QuestBoxProps>`
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  background-color: #feefc6;
  justify-content: space-around;
  width: 100%;
  padding: 40px;
  height: 20%;

  ${({ $isCheckedIn }) =>
    $isCheckedIn &&
    `
    cursor: not-allowed; /* 마우스 커서 변경 */
    pointer-events: none; /* 모든 클릭 이벤트 무시 */
  `}

  @media screen and (max-width: 450px) {
    padding: 20px;
    border-radius: 20px;
  }
`;

export const CheckBox = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;

  @media screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;

export const CheckImg = styled.img`
  width: 100px;

  @media screen and (max-width: 450px) {
    width: 70px;
  }
`;

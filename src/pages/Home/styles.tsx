import styled, { keyframes } from "styled-components";

export const HomeBackGround = styled.div`
  background-image: url("/assets/images/background2.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 60%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  height: 10%;
`;

export const NotificationBox = styled.div`
  span {
    font-weight: 600;
  }

  svg:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 450px) {
    svg {
      margin-top: 7px;
      width: 30px;
    }

    span {
      font-size: 0.9rem;
    }
  }
`;

export const FriendshipBar = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  progress {
    appearance: none;
    margin-left: 10px;
    height: 25px;
    width: 230px;
  }

  progress::-webkit-progress-bar {
    background: #ffffff;
    border-radius: 30px;
    border: 1px solid #bebebe;
    overflow: hidden;
  }

  progress::-webkit-progress-value {
    background: #ff8a8a;
    border-radius: 0px;
  }

  @media screen and (max-width: 600px) {
    progress {
      height: 20px;
      width: 170px;
    }
  }

  @media screen and (max-width: 450px) {
    progress {
      height: 17px;
      width: 150px;
    }
    svg {
      width: 25px;
    }
  }
`;

export const Main = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  height: 90%;
`;

export const CharacterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 70px;
`;

export const Character = styled.div`
  position: relative;
  top: -310px;
  div {
    margin-top: -40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  @media screen and (max-width: 600px) {
    top: -215px;
  }

  @media screen and (max-width: 450px) {
    top: -175px;
  }
`;

export const PlantImg = styled.img`
  width: 300px;

  @media screen and (max-width: 600px) {
    width: 230px;
  }

  @media screen and (max-width: 450px) {
    width: 190px;
  }
`;

export const TableImg = styled.img`
  position: relative;
  bottom: -360px;
  width: 360px;

  @media screen and (max-width: 600px) {
    bottom: -300px;
    width: 280px;
  }

  @media screen and (max-width: 450px) {
    bottom: -270px;
    width: 250px;
  }
`;

export const LevelImg = styled.img`
  height: 25px;
  width: 25px;
  @media screen and (max-width: 600px) {
    height: 30px;
    width: 30px;
  }

  @media screen and (max-width: 450px) {
    margin-top: 5px;
    height: 25px;
    width: 25px;
  }
`;

export const CharacterName = styled.span`
  font-weight: 500;
  font-size: 1rem;
  margin-left: 5px;
  transform: translateY(10%);

  @media screen and (max-width: 450px) {
    margin-top: 5px;
    margin-left: 2px;
    font-size: 0.9rem;
  }
`;

export const SideBar = styled.aside`
  position: absolute;
  right: 0;
  bottom: 400px;
  width: 20%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    margin: 7px 0px;
  }

  span {
    margin-top: 10px;
    font-size: 0.9rem;
  }

  svg {
    width: 40px;
  }

  div:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    bottom: 300px;
  }

  @media screen and (max-width: 450px) {
    bottom: 180px;

    div {
      padding: 7px 0px;
      margin: 4px 0px;
    }

    svg {
      width: 30px;
    }

    span {
      margin-top: 4px;
      font-size: 0.8rem;
    }
  }
`;

export const QuestModalBox = styled.div`
  position: fixed;
  padding: 10px;
  top: 20%;
  left: 30%;
  width: 40%;
  height: 55%;
  background: white;
  border-radius: 25px;
  box-shadow: 0px 0px 10px rgba(250, 150, 51, 0.1);
  border: 5px solid #eae5dc;
  z-index: 100;
  & h3 {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #53390a;
  }
  @media screen and (max-width: 450px) {
    left: 7.5%;
    width: 85%;
    height: 60%;
    overflow: scroll;
  }
`;

export const NotificationModalBox = styled(QuestModalBox)`
  top: 8%;
  left: 10%;
  width: 80%;
  height: 40%;
  min-height: 300px;
  background: white;
  border-radius: 25px;
  box-shadow: 0px 0px 10px rgba(250, 150, 51, 0.1);
  border: 5px solid #eae5dc;
  /* overflow-y: scroll; */
  padding: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NotificationHeader = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  background-color: #fff;
  padding-bottom: 10px;
  & header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & svg {
    font-size: 1.7rem;
  }

  & h3 {
    text-align: center;
    color: #53390a;
    margin: 0;
  }

  & div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & span {
    font-size: 0.9rem;
    padding: 3px 7px;
    background-color: #ffe0e0;
    border-radius: 5px;
    color: #8a3a3a;
    font-weight: 600;

    &:hover {
      filter: contrast(80%);
    }
  }
`;

export const NotificationBody = styled.div`
  width: calc(100% + 5px);
  height: calc(100% - 40px);
  padding-right: 5px;
  overflow-y: scroll;
  /* 스크롤바의 기본 트랙 스타일 */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* 스크롤바의 트랙 스타일 */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* 스크롤바의 핸들 스타일 */
  &::-webkit-scrollbar-thumb {
    background: #abffa9;
    border-radius: 6px;
  }

  /* 스크롤바의 핸들을 호버할 때 스타일 */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const NoNotification = styled.div`
  color: rgba(0, 0, 0, 0.7);
`;

export const QuestModalCloseBtn = styled.div`
  width: 90%;
  text-align: center;
  padding: 12px 0px;
  border-radius: 10px;
  background-color: #ffd6a1;
  font-size: 0.9rem;
  margin: auto;
  margin-top: 15px;
`;

const pop = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

export const HeartImage = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  background-image: url("/assets/images/heart.png");
  background-size: cover;
  opacity: 0;
  animation: ${pop} 0.8s forwards;
  pointer-events: auto; // 하트 이미지에는 포인터 이벤트 적용
`;

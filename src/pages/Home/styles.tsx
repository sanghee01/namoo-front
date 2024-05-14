import styled from "styled-components";

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

  svg:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    svg {
      width: 40px;
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
  align-items: center;
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
`;

export const PlantImg = styled.img`
  width: 300px;

  @media screen and (max-width: 600px) {
    width: 230px;
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
`;

export const LevelImg = styled.img`
  height: 25px;
  width: 25px;
  @media screen and (max-width: 600px) {
    height: 30px;
    width: 30px;
  }
`;

export const CharacterName = styled.span`
  font-weight: 500;
  font-size: 1rem;
  margin-left: 5px;
  transform: translateY(10%);
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
`;

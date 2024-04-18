import styled from "styled-components";

export const HomeBackGround = styled.div`
  background-image: url("/assets/images/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
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
    svg:first-child {
      width: 24px;
    }
    svg {
      width: 30px;
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
  top: -200px;
  div {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  @media screen and (max-width: 600px) {
    top: -140px;
  }
`;

export const PlantImg = styled.img`
  width: 200px;

  @media screen and (max-width: 600px) {
    width: 140px;
  }
`;

export const TableImg = styled.img`
  position: relative;
  bottom: -340px;
  width: 360px;

  @media screen and (max-width: 600px) {
    bottom: -235px;
    width: 250px;
  }
`;

export const LevelImg = styled.img`
  height: 25px;
  width: 25px;
  @media screen and (max-width: 600px) {
    height: 20px;
    width: 20px;
  }
`;

export const CharacterName = styled.span`
  font-weight: 500;
  font-size: 1rem;
  transform: translateY(15%);

  @media screen and (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

export const SideBar = styled.aside`
  position: absolute;
  right: 0;
  bottom: 250px;
  width: 20%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 13px 0px;

    span {
      margin-top: 5px;
      font-size: 0.9rem;
    }
  }

  div:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    bottom: 170px;

    svg {
      width: 30px;
    }
    div {
      padding: 7px 0px;
      span {
        margin-top: 3%;
        font-size: 0.8rem;
      }
    }
  }
`;

import styled from "styled-components";

export const HomeBackGround = styled.div`
  background-image: url("/assets/image/background.png");
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
`;

export const Main = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  height: 90%;
`;

export const Character = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 180px;

  div {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const PlantImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const LevelImg = styled.img`
  height: 25px;
  width: 25px;
`;

export const CharacterName = styled.span`
  font-weight: 500;
  transform: translateY(15%);
`;

export const SideBar = styled.aside`
  position: absolute;
  right: 0;
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
`;

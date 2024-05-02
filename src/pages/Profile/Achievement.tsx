import styled from "styled-components";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { Text }from "./styles";

const Achievement = () => {
    return(
        <AchievementBackGround>
            <Header>
                    <Link to="/profile">
                        <MdArrowBackIos size="30"/>
                    </Link>
                    <Text>
                        뱃지 보관함
                    </Text>
            </Header>
            <Container>
                <Badge>
                    <BadgeImg src="/assets/image/lock.png" alt="lock" />
                </Badge>
                <Badge>
                    <BadgeImg src="/assets/image/lock.png" alt="lock" />
                </Badge>
            </Container>
            <Container>
                <Badge>
                    <BadgeImg src="/assets/image/lock.png" alt="lock" />
                </Badge>
                <Badge>
                    <BadgeImg src="/assets/image/lock.png" alt="lock" />
                </Badge>
            </Container>
            <Container>
                <Badge>
                    <BadgeImg src="/assets/image/lock.png" alt="lock" />
                </Badge>
                <Badge>
                    <BadgeImg src="/assets/image/lock.png" alt="lock" />
                </Badge>
            </Container>
        </AchievementBackGround>

            
    );

};

export const AchievementBackGround = styled.div`
  flex: 1;
  position: relative;
  background-color: #fffaed;
  background-size: cover;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 25px;
  height: 10%;

  svg:hover {
    cursor: pointer;
  }
`;

export const Container = styled.div`
    width: 100%;
    height: 25%; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;

export const Badge = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    height: 90%;
    margin: 10px;
    padding: 20px;
`;

export const BadgeImg = styled.img`
    width: 130px;
    height: 130px;

    &:hover {
        cursor: pointer; 
`;


export default Achievement;
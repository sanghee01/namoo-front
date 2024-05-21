import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { MdArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Text } from './styles';
import { userState } from '../../state/userState';
import { useRecoilValue } from 'recoil';

interface Achievement {
    achievementId: number;
    title: string;
    description: string;
    goal: number;
    progress: number;
    completed: boolean;
}

const Achievement = () => {
    const [achievements, setAchievements] = useState<Achievement[]>([]);
    const user = useRecoilValue(userState);

    const fetchAchievements = async () => {
        if (user && user.accessToken) {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_SERVER_APIADDRESS}/member/achievement`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.accessToken}`,
                        },
                    }
                );
                return response.data;
            } catch (error) {
                console.error('업적을 가져오는데 실패했습니다:', error);
                return null;
            }
        } else {
            console.log('사용자 정보가 없거나 토큰이 유효하지 않습니다.');
            return null;
        }
    };

    // fetchAchievements 함수를 호출하고 데이터를 콘솔에 출력
fetchAchievements().then(data => {
    if (data) {
        console.log('받아온 데이터:', data);
    } else {
        console.log('데이터를 가져오지 못했습니다.');
    }
});

    useEffect(() => {
        const init = async () => {
            const data = await fetchAchievements();
            if (data && data.content) {
                setAchievements(data.content);
            }
        };
        init();
    }, [user]);
    
//테스트용 post 요청
/*    useEffect(() => {
        const completeAchievement = async (achievementId: number) => {
            if (user && user.accessToken) {
                try {
                    const response = await axios.post(
                        `${import.meta.env.VITE_SERVER_APIADDRESS}/member/achievement/test`,
                        {
                            target: achievementId
                        },
                        {
                            headers: {
                                Authorization: `Bearer ${user.accessToken}`,
                            },
                        }
                    );
                    console.log('Achievement completed:', response.data);
                    return response.data;
                } catch (error) {
                    console.error('Failed to complete achievement:', error);
                    return null;
                }
            } else {
                console.log('User information is missing or the token is invalid.');
                return null;
            }
        };

        // 예시로 도전과제 ID 2를 완료하는 함수 호출
        completeAchievement(2);
    }, [user]);
*/
    const renderAchievements = () => {
        const chunks = [];
        for (let i = 0; i < achievements.length; i += 2) {
            chunks.push(achievements.slice(i, i + 2));
        }

        return chunks.map((chunk, index) => (
            <Container key={index}>
                {chunk.map((achievement, idx) => (
                    <Badge key={idx}>
                        <BadgeImg
                            src={achievement.completed ? `/assets/images/unlock${idx + 1}.png` : "/assets/images/lock.png"}
                            alt="achievement"
                        />
                    </Badge>
                ))}
            </Container>
        ));
    };

    return (
        <AchievementBackGround>
            <Header>
                <Link to="/profile">
                    <MdArrowBackIos size="30" />
                </Link>
                <Text>명예의 전당</Text>
            </Header>
            {renderAchievements()}
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
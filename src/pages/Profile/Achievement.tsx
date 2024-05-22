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

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    achievement: Achievement | null;
  }
// 모달 컴포넌트 정의
const Modal: React.FC<ModalProps> = ({ isOpen, achievement, onClose }) =>  {
    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#F5F5DC', // 베이지 색으로 배경 설정
            color: '#3E704D', // 짙은 초록색으로 글자 색상 설정
            padding: '20px',
            borderRadius: '10px', // 모서리를 둥글게
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // 그림자를 조금 더 부드럽게
            zIndex: 1000,
            width: '300px', // 모달창의 너비 설정
            height: '200px', // 모달창의 높이 설정
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between' // 내용물을 공간에 맞게 정렬
        }}>
            <h2>{achievement?.title}</h2>
            <p>{achievement?.description}</p>
            <button onClick={onClose} style={{
                backgroundColor: '#8FBC8F', // 연두색으로 버튼 배경 설정
                color: 'white', // 버튼 글자 색상을 흰색으로
                border: 'none', // 테두리 제거
                borderRadius: '5px', // 버튼 모서리를 둥글게
                padding: '10px 20px', // 패딩 조정
                cursor: 'pointer', // 마우스 오버 시 커서 변경
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)' // 버튼에 그림자 추가
            }}>닫기</button>
        </div>
    );
};

const Achievement = () => {
    const [achievements, setAchievements] = useState<Achievement[]>([]);
    const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
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
    // 업적 클릭 핸들러
    const handleAchievementClick = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
  };

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
                            src={achievement.completed ? `/assets/images/unlock${achievement.achievementId}.png` : "/assets/images/lock.png"}
                            alt="achievement"
                            onClick={() => handleAchievementClick(achievement)}
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
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                achievement={selectedAchievement}
            />
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
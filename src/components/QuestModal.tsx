import styled from "styled-components";
import { acceptQuest, completeQuest } from "../services/questApi";
import { useCallback, useEffect, useState } from "react";

interface ModalProps {
  questId: number;
  title: string;
  description: string;
  progress: number;
  goal: number;
  reward: number;
  completed: boolean;
  accepted: boolean;
}

const QuestModal: React.FC<ModalProps> = ({
  questId,
  title,
  description,
  progress,
  goal,
  reward,
  completed,
  accepted,
}) => {
  const [isComplete, setIsComplete] = useState(completed);

  useEffect(() => {
    if (progress === goal) {
      setIsComplete(isComplete);
    }
  }, [goal, isComplete, progress]);

  const handleAcceptQuest = useCallback(async () => {
    try {
      const response = await acceptQuest(questId);
      console.log("퀘스트 수락 요청", response);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  }, [questId]);

  const handleCompleteQuest = useCallback(async () => {
    if (isComplete) {
      try {
        const response = await completeQuest(questId);
        console.log("퀘스트 완료 요청", response);
      } catch (error: any) {
        alert(error.response.data.message);
      }
    } else {
      alert("아직 해결이 안 된 퀘스트입니다!");
    }
  }, [isComplete, questId]);

  return (
    <QuestContainer key={questId}>
      <QuestContent>
        <h4>{title}</h4>
        <p>{description}</p>
        <span>보상: {reward} exp</span>
      </QuestContent>
      <ProgressBox>
        {accepted ? (
          <>
            <span>
              {progress} / {goal}
            </span>
            <AcceptBtn onClick={handleCompleteQuest}>완료</AcceptBtn>
          </>
        ) : (
          <AcceptBtn onClick={handleAcceptQuest}>수락</AcceptBtn>
        )}
      </ProgressBox>
    </QuestContainer>
  );
};

export default QuestModal;

const QuestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid lightgray;
  font-size: 0.8rem;

  padding: 7px 10px;
  & h4 {
    font-size: 0.9rem;
  }
`;

const QuestContent = styled.div`
  width: 85%;
`;

const AcceptBtn = styled.span`
  padding: 4px 6px;
  background-color: #e1d9d4;
  border-radius: 7px;
  &:hover {
    cursor: pointer;
    filter: contrast(80%);
  }
`;

const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  width: 15%;
`;

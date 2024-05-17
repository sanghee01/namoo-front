import styled from "styled-components";
import { useAcceptQuest, useCompleteQuest } from "../hooks/useQuest";
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
  const acceptQuest = useAcceptQuest();
  const completeQuest = useCompleteQuest();
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    if (progress === goal) {
      setIsComplete(isComplete);
    }
  }, [goal, isComplete, progress]);

  const handleAcceptQuest = useCallback(() => {
    acceptQuest(questId);
    setIsAccepted(true);
  }, [acceptQuest, questId]);

  const handleCompleteQuest = useCallback(() => {
    completeQuest(questId);
  }, [completeQuest, questId]);

  useEffect(() => {}, [accepted]);
  return (
    <QuestContainer key={questId}>
      <QuestContent>
        <h4>{title}</h4>
        <p>{description}</p>
        <span>보상: {reward} exp</span>
      </QuestContent>
      <ProgressBox>
        {accepted || isAccepted ? (
          <>
            <span>
              {progress} / {goal}
            </span>
            <AcceptBtn color="#abdca1" onClick={handleCompleteQuest}>
              완료
            </AcceptBtn>
          </>
        ) : (
          <AcceptBtn color="#e1d9d4" onClick={handleAcceptQuest}>
            수락
          </AcceptBtn>
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
  background-color: ${(props) => props.color};
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

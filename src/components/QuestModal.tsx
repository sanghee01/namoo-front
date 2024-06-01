import styled from "styled-components";
import { useAcceptQuest, useCompleteQuest } from "../hooks/useQuest";
import { useCallback, useEffect, useState } from "react";
import { warningAlert } from "./Alert";

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
  const [isGetGift, setIsGift] = useState("#cdcdcd");

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
    if (!isComplete) {
      completeQuest(questId);
      setIsGift("#abdca1");
    } else {
      warningAlert("이미 받은 보상입니다!");
    }
  }, [completeQuest, isComplete, questId]);

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
              {progress >= goal ? goal : progress} / {goal}
            </span>
            <AcceptBtn color={isComplete ? isGetGift : "#ffecaf"} onClick={handleCompleteQuest}>
              {isComplete ? "보상받기" : "진행중"}
            </AcceptBtn>
          </>
        ) : (
          <AcceptBtn color="#edd1b6" onClick={handleAcceptQuest}>
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
  width: 90%;
  border-bottom: 1px solid lightgray;
  font-size: 0.75rem;
  padding: 7px 0px;
  margin: auto;

  & h4 {
    font-size: 0.9rem;
  }

  @media screen and (max-width: 450px) {
    & h4 {
      font-size: 0.85rem;
    }
  }
`;

const QuestContent = styled.div`
  width: 80%;
`;

const ProgressBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

const AcceptBtn = styled.span<{ color: string }>`
  padding: 4px 6px;
  background-color: ${(props) => props.color};
  border-radius: 7px;
  font-size: 0.7rem;
  &:hover {
    cursor: pointer;
    filter: contrast(80%);
  }
`;

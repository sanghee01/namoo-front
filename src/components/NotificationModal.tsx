import styled from "styled-components";
import { useNavigate } from "react-router";
import { useState } from "react";
import { usePatchNotification } from "../hooks/useNotification";

interface NotificationModalProps {
  id: number;
  description: string;
  link: string;
  isRead: boolean;
  notificationType: string;
  createdDate: string;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  id,
  description,
  link,
  isRead,
  notificationType,
  createdDate,
}) => {
  const navegate = useNavigate();
  const date = new Date(createdDate);
  const patchNotification = usePatchNotification();
  const handleClickNotification = (e: React.MouseEvent<EventTarget>) => {
    e.preventDefault();

    patchNotification(id); // 알림 읽음 요청

    if (link === "history") {
      navegate("/history");
    } else {
      navegate("/home");
    }
  };

  if (link)
    return (
      <NotificationContainer key={id} isRead={isRead} onClick={handleClickNotification}>
        <h4>{notificationType}</h4>
        <Content>
          <p>{description}</p>
          <span>{date.toLocaleString()}</span>
        </Content>
      </NotificationContainer>
    );
};

export default NotificationModal;

const NotificationContainer = styled.div<{ isRead: boolean }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.8rem;
  background-color: ${(props) => (props.isRead ? "#e0e0e079" : "#e1f9d2")};
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 8px;
  color: ${(props) => (props.isRead ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,1)")};

  &:hover {
    cursor: pointer;
    filter: contrast(80%);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 70%;

  & span {
    font-size: 0.7rem;
  }
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

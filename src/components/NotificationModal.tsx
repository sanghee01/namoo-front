import styled from "styled-components";
import { useNavigate } from "react-router";
import { useDeleteNotification, usePatchNotification } from "../hooks/useNotification";
import { FaTrashAlt } from "react-icons/fa";
import { useCallback, useState } from "react";

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
  const deleteNotification = useDeleteNotification();
  const [isDeleted, setIsDeleted] = useState(false);

  const handleClickNotification = useCallback(() => {
    patchNotification(id); // 알림 읽음 요청

    if (link === "history") {
      navegate("/history");
    } else {
      navegate("/home");
    }
  }, [id, link, navegate, patchNotification]);

  const handleDeleteNotification = useCallback(() => {
    deleteNotification(id); // 알림 삭제 요청
    setIsDeleted(true);
  }, [deleteNotification, id]);

  return (
    <>
      {!isDeleted && (
        <NotificationContainer key={id} $isread={isRead ? 1 : 0}>
          <div onClick={handleClickNotification}>
            <h4>{notificationType}</h4>
            <Content>
              <p>{description}</p>
              <span>{date.toLocaleString()}</span>
            </Content>
          </div>
          {isRead && <FaTrashAlt onClick={handleDeleteNotification} />}
        </NotificationContainer>
      )}
    </>
  );
};

export default NotificationModal;

const NotificationContainer = styled.div<{ $isread: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  background-color: ${(props) => (props.$isread ? "#e0e0e079" : "#e1f9d2")};
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 8px;
  color: ${(props) => (props.$isread ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,1)")};

  & > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 95%;
  }

  & svg {
    font-size: 1.1rem;
  }

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

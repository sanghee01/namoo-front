import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 모달 배경의 z-index 설정 */
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  z-index: 1001; /* 모달 콘텐츠의 z-index 설정 */
  width: 70%; /* 너비를 화면의 70%로 설정 */
  max-width: 500px; /* 최대 너비를 500px로 설정하여 너무 넓어지지 않도록 함 */

  @media (max-width: 600px) {
    width: 90%; /* 화면의 너비를 90%로 설정 */
  }
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;

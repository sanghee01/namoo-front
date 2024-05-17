import { useState } from "react";
import styled from "styled-components";
import { BsFillSendFill } from "react-icons/bs";

const Chat = () => {
  const [messages, setMessages] = useState([{ id: 1, text: "안녕하세요! 무엇을 도와드릴까요?", isUser: false }]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages((prevMessages) => [...prevMessages, { id: prevMessages.length + 1, text: inputText, isUser: true }]);
      setInputText("");

      // AI의 응답 추가
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: prevMessages.length + 1, text: "네, 어떤 도움이 필요하신가요?", isUser: false },
        ]);
      }, 1000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <ChatContainer>
      <Top></Top>
      <ChatHeader>
        <RobotIcon>🤖</RobotIcon>
        <ChatTitle>Chatbot</ChatTitle>
      </ChatHeader>
      <ChatContent>
        {messages.map((message, index) => (
          <BubbleWrapper key={index} isUser={message.isUser}>
            {!message.isUser && <BubbleName>식물ai</BubbleName>}
            <ChatBubble isUser={message.isUser}>{message.text}</ChatBubble>
          </BubbleWrapper>
        ))}
      </ChatContent>
      <ChatInput>
        <InputBox
          placeholder="메시지를 입력하여 대화를 해주세요"
          value={inputText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <SendButton onClick={handleSendMessage} style={{ fontSize: "auto" }}>
          <BsFillSendFill size="75%" />
        </SendButton>
      </ChatInput>
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;
`;

const Top = styled.div`
  height: 20px;
  width: 100%;
  background-color: #75c975;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
  padding: 5px 15px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const RobotIcon = styled.div`
  font-size: 30px;
  margin-right: 4px;
`;

const ChatTitle = styled.h3`
  flex-grow: 1;
  font-size: 25px;
  font-weight: bold;
`;

const ChatContent = styled.div`
  flex-grow: 1;
  padding: 10px 15px;
  overflow-y: auto;
  margin-top: 10px;
`;

interface ChatBubbleProps {
  isUser: boolean;
}

const ChatBubble = styled.div<ChatBubbleProps>`
  background-color: ${(props) => (props.isUser ? "#61a263" : "#ececec")};
  color: ${(props) => (props.isUser ? "#ffffff" : "#333")};
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 15px;
  margin-bottom: 12px;
  max-width: fit-content;
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  margin-left: ${(props) => (props.isUser ? "auto" : "0")};
  margin-right: ${(props) => (props.isUser ? "0" : "auto")};
`;

interface BubbleWrapper {
  isUser: boolean;
}
const BubbleWrapper = styled.div<BubbleWrapper>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
`;

const BubbleName = styled.div`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 0.2rem;
  margin-left: 7px;
`;

const ChatInput = styled.div`
  display: flex;
  height: 8%;
  padding: 2px 14px;
  background-color: #ffffff;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
`;

const InputBox = styled.input`
  flex-grow: 1;
  border: none;
  font-size: 16px;
`;

const SendButton = styled.button`
  color: #939393;
  background-color: transparent;
  border: none;
  padding-top: 5px;
  cursor: pointer;
`;

export default Chat;

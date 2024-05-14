import { useState } from "react";
import styled from "styled-components";

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

  return (
    <ChatContainer>
      <Top></Top>
      <ChatHeader>
        <RobotIcon></RobotIcon>
        <ChatTitle>Chatbot</ChatTitle>
      </ChatHeader>
      <ChatContent>
        {messages.map((message, index) => (
          <ChatBubble key={index} isUser={message.isUser}>
            {message.text}
          </ChatBubble>
        ))}
      </ChatContent>
      <ChatInput>
        <InputBox
          placeholder="메시지를 입력하여 대화를 해주세요"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <SendButton onClick={handleSendMessage}>전송</SendButton>
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
  background-color: green;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  height: 10%;
  padding: 5px 10px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const RobotIcon = styled.button``;

const ChatTitle = styled.h3`
  flex-grow: 1;
  font-size: 23px;
  font-weight: bold;
`;

const ChatContent = styled.div`
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
  margin-top: 10px;
`;

interface ChatBubbleProps {
  isUser: boolean;
}

const ChatBubble = styled.div<ChatBubbleProps>`
  background-color: ${(props) => (props.isUser ? "#61a263" : "#ececec")};
  color: ${(props) => (props.isUser ? "#ffffff" : "#333")};
  padding: 10px;
  font-size: 12px;
  border-radius: 15px;
  margin-bottom: 12px;
  max-width: fit-content;
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  margin-left: ${(props) => (props.isUser ? "auto" : "0")};
  margin-right: ${(props) => (props.isUser ? "0" : "auto")};
`;

const ChatInput = styled.div`
  display: flex;
  height: 8%;
  padding: 1px;
  background-color: #ffffff;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
`;

const InputBox = styled.input`
  flex-grow: 1;
  border: none;
  padding: 0px 15px;
  font-size: 15px;
`;

const SendButton = styled.button`
  background-color: #61a263;
  color: #fff;
  border: none;
  padding: 10px 30px;
  border-radius: 20px;
  cursor: pointer;
`;

export default Chat;

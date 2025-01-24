import styled from '@emotion/styled';
import Header from './Header';
import MessageList from './MessageList';
import InputArea from './InputArea';
import QuickQuestions from './QuickQuestions';
import { useChat } from '../contexts/ChatContext';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

function ChatInterface() {
  const { messages, loading, addMessage } = useChat();

  const handleSendMessage = (text: string) => {
    addMessage({
      type: 'user',
      content: text,
      timestamp: new Date().toISOString(),
    });
    
    // 模擬機器人回覆
    setTimeout(() => {
      addMessage({
        type: 'bot',
        content: '這是一個測試回覆',
        timestamp: new Date().toISOString(),
      });
    }, 1000);
  };

  return (
    <ChatContainer>
      <Header />
      <MainArea>
        <MessageList messages={messages} loading={loading} />
        <QuickQuestions onQuestionSelect={handleSendMessage} />
        <InputArea onSend={handleSendMessage} />
      </MainArea>
    </ChatContainer>
  );
}

export default ChatInterface; 
import styled from '@emotion/styled';
import { Message } from '../types/chat';

interface MessageBubbleProps {
  isBot: boolean;
}

const MessageListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`;

const MessageBubble = styled.div<MessageBubbleProps>`
  max-width: 80%;
  margin: ${props => props.isBot ? '0 auto 16px 0' : '0 0 16px auto'};
  padding: 12px;
  border-radius: 8px;
  background-color: ${props => props.isBot ? '#E8F4FF' : '#F5F5F5'};
`;

const Timestamp = styled.div`
  font-size: 12px;
  color: #999999;
  margin-top: 4px;
`;

interface MessageListProps {
  messages: Message[];
  loading: boolean;
}

function MessageList({ messages, loading }: MessageListProps) {
  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('zh-TW', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <MessageListContainer>
      {messages.map((message, index) => (
        <MessageBubble
          key={index}
          isBot={message.type === 'bot'}
        >
          <div>{message.content}</div>
          <Timestamp>{formatTime(message.timestamp)}</Timestamp>
        </MessageBubble>
      ))}
      {loading && <MessageBubble isBot>...</MessageBubble>}
    </MessageListContainer>
  );
}

export default MessageList; 
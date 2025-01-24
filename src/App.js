import styled from '@emotion/styled';
import ChatInterface from './components/ChatInterface';
import { ChatProvider } from './contexts/ChatContext';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #ffffff;
`;

function App() {
  return (
    <ChatProvider>
      <AppContainer>
        <ChatInterface />
      </AppContainer>
    </ChatProvider>
  );
}

export default App; 
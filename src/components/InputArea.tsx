import styled from '@emotion/styled';
import { useState } from 'react';

const InputContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-top: 1px solid #e8e8e8;
`;

const Input = styled.input`
  flex: 1;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin-right: 12px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #1B4F72;
  }
`;

const SendButton = styled.button`
  width: 60px;
  height: 40px;
  background-color: #1B4F72;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #2C3E50;
  }
`;

interface InputAreaProps {
  onSend: (text: string) => void;
}

function InputArea({ onSend }: InputAreaProps) {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  return (
    <InputContainer>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
        placeholder="請輸入您的問題..."
      />
      <SendButton onClick={handleSubmit}>發送</SendButton>
    </InputContainer>
  );
}

export default InputArea; 
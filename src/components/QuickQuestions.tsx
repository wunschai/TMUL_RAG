import styled from '@emotion/styled';

const QuickQuestionsContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  gap: 10px;
  overflow-x: auto;
  background-color: #f9f9f9;
`;

const QuickButton = styled.button`
  min-width: 100px;
  height: 32px;
  background-color: white;
  border: 1px solid #1B4F72;
  color: #1B4F72;
  border-radius: 16px;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    background-color: #E8F4FF;
  }
`;

const quickQuestions = [
  '館藏查詢',
  '借還規則',
  '開放時間',
  '座位預約',
  '活動資訊'
];

interface QuickQuestionsProps {
  onQuestionSelect: (question: string) => void;
}

function QuickQuestions({ onQuestionSelect }: QuickQuestionsProps) {
  return (
    <QuickQuestionsContainer>
      {quickQuestions.map((question, index) => (
        <QuickButton
          key={index}
          onClick={() => onQuestionSelect(question)}
        >
          {question}
        </QuickButton>
      ))}
    </QuickQuestionsContainer>
  );
}

export default QuickQuestions; 
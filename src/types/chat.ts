export interface Message {
  type: 'user' | 'bot';
  content: string;
  timestamp: string;
}

export interface ChatContextType {
  messages: Message[];
  loading: boolean;
  setLoading: (loading: boolean) => void;
  addMessage: (message: Message) => void;
  clearMessages: () => void;
} 
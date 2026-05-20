import ChatBubble from "@/pages/chatbot/component/chat-bubble";
import { type ChatMessage } from "@/pages/chatbot/component/chat-type";

type ChatDetailProps = {
  messages: ChatMessage[];
};

export default function ChatDetail({
  messages,
}: ChatDetailProps) {
  return (
    <div className="flex flex-col gap-4">
      {messages.map((chat) => (
        <ChatBubble
          key={chat.id}
          sender={chat.sender}
          message={chat.message}
        />
      ))}
    </div>
  );
}
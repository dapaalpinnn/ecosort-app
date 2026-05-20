import ChatBubble from "@/pages/chatbot/components/chat-bubble"
import { type ChatMessage } from "@/pages/chatbot/components/chat-type"

type ChatDetailProps = {
  messages: ChatMessage[]
}

const ChatDetail = ({ messages }: ChatDetailProps) => {
  return (
    <div className="flex flex-col gap-4">
      {messages.map((chat) => (
        <ChatBubble key={chat.id} sender={chat.sender} message={chat.message} />
      ))}
    </div>
  )
}

export default ChatDetail

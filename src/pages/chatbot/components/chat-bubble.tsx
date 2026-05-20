import { cn } from "@/lib/utils"
import UserIcon from "@/assets/images/user-icon.png"
import ChatbotIcon from "@/assets/images/chatbot-icon.png"

type ChatBubbleProps = {
  sender: "bot" | "user"
  message: string
}

const ChatBubble = ({ sender, message }: ChatBubbleProps) => {
  const isUser = sender === "user"

  return (
    <div
      className={cn(
        "flex w-full items-end gap-2",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <img src={ChatbotIcon} alt="Bot" className="h-10 w-10 rounded-full" />
      )}
      <div
        className={cn(
          "max-w-[75%] rounded-4xl px-4 py-3 text-sm shadow",
          isUser ? "bg-primary text-white" : "bg-slate-200 text-black"
        )}
      >
        {message}
      </div>
      {isUser && (
        <img src={UserIcon} alt="User" className="h-9 w-9 rounded-full" />
      )}
    </div>
  )
}

export default ChatBubble

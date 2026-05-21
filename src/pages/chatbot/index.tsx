import { Send, X } from "lucide-react"
import { useState } from "react"
import { sendChatMessage } from "@/services/chat-service"
import { type ChatMessage } from "@/pages/chatbot/components/chat-type"
import ChatDetail from "@/pages/chatbot/components/chat-detail"

type ChatWidgetProps = {
  onClose: () => void
}

const ChatWidget = ({ onClose }: ChatWidgetProps) => {
  const [isSending, setIsSending] = useState(false)
  const [message, setMessage] = useState<string>("")
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "bot",
      message: "Ada yang bisa saya bantu?",
    },
    {
      id: 2,
      sender: "bot",
      message: "Tanyakan terkait daur ulang dan pengelolaan sampah",
    },
  ])

  const handleSend = async () => {
    if (!message.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now(),
      sender: "user",
      message: message,
    }

    setMessages((prev) => [...prev, userMessage])
    const currentMessage = message
    setMessage("")
    setIsSending(true)

    try {
      const response = await sendChatMessage(currentMessage)
      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        sender: "bot",
        message: response.response,
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error: unknown) {
      const errorMessage: ChatMessage = {
        id: Date.now() + 1,
        sender: "bot",
        message: "Maaf, terjadi kesalahan pada server." + error,
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="fixed bottom-24 left-1/2 z-50 flex h-125 w-[calc(100%-2rem)] max-w-87.5 -translate-x-1/2 flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:right-5 sm:left-auto sm:w-87.5 sm:translate-x-0">
      <div className="flex h-20 items-center justify-between px-4 py-2 text-primary">
        <div className="w-5" />
        <div className="flex-1 text-center">
          <h1 className="text-xl font-medium tracking-tight">
            Selamat datang di Ecobot
          </h1>
          <p className="text-xs opacity-80">
            Asisten virtual untuk membantu Anda!
          </p>
        </div>
        <button
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-black/5"
        >
          <X size={20} />
        </button>
      </div>
      <div
        data-lenis-prevent
        className="flex-1 overflow-y-auto overscroll-none px-4 py-4"
      >
        <ChatDetail messages={messages} />
      </div>
      <div className="flex items-center gap-2 border-t bg-white p-3">
        <input
          disabled={isSending}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend()
            }
          }}
          placeholder="Ketik pesan Anda..."
          className="flex-1 rounded-full bg-slate-100 px-4 py-2 text-sm outline-none"
        />
        <button
          onClick={handleSend}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  )
}

export default ChatWidget

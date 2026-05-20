import { useState } from "react";
import { Send, X } from "lucide-react";
import ChatDetail from "@/pages/chatbot/component/chat-detail";
import { type ChatMessage } from "@/pages/chatbot/component/chat-type";

type ChatWidgetProps = {
  onClose: () => void;
};

export default function ChatWidget({
  onClose,
}: ChatWidgetProps) {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "bot",
      message: "Ada yang bisa saya bantu?",
    },
    {
      id: 2,
      sender: "bot",
      message:
        "Tanyakan terkait daur ulang dan pengelolaan sampah",
    },
  ]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      sender: "user",
      message: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentMessage = message;
    setMessage("");

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL ?? "https://ecosort-backend-production.up.railway.app";

    try {
      const res = await fetch(`${BACKEND_URL}/api/chat/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentMessage,
        }),
      });

      if (!res.ok) throw new Error("Failed to fetch bot response");

      const data = await res.json();

      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        sender: "bot",
        message: data.response,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: Date.now() + 1,
        sender: "bot",
        message: "Maaf, terjadi kesalahan pada server.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div
      className="
        fixed
        bottom-28
        right-5
        z-50
        flex
        h-[500px]
        w-[350px]
        flex-col
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-2xl
      "
    >
      <div className="relative flex h-20 items-center justify-center px-4 py-2 text-primary">
        <div className="text-center">
          <h1 className="text-lg font-bold">
            Selamat datang di Ecobot
          </h1>

          <p className="text-xs opacity-80">
            Asisten virtual untuk membantu Anda!
          </p>
        </div>

        <button
          onClick={onClose}
          className="absolute right-4"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <ChatDetail messages={messages} />
      </div>

      <div className="flex items-center gap-2 border-t bg-white p-3">
        <input
          type="text"
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Ketik pesan Anda..."
          className="
            flex-1
            rounded-full
            bg-slate-100
            px-4
            py-2
            text-sm
            outline-none
          "
        />

        <button
          onClick={handleSend}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-primary
            text-white
          "
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
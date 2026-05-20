import { useState } from "react";
import ChatbotIcon from "@/assets/images/chatbot-icon.png";
import ChatWidget from "@/pages/chatbot/index";

export default function FloatingChatbot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <ChatWidget onClose={() => setOpen(false)} />}

      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          bottom-5
          right-5
          z-50
          flex
          h-20
          w-20
          bg-transparent
          items-center
          justify-center
          transition
          hover:scale-110
        "
      >
        <img
          src={ChatbotIcon}
          alt="Chatbot"
          className="h-full w-full object-contain"
        />
      </button>
    </>
  );
}
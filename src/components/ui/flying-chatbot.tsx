import { motion } from "motion/react"
import { useState } from "react"

import ChatWidget from "@/pages/chatbot/index"
import ChatbotIcon from "@/assets/images/chatbot-icon.png"

const FloatingChatbot = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && <ChatWidget onClose={() => setOpen(false)} />}

      <motion.button
        onClick={() => setOpen(!open)}
        initial={{ y: 0 }}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed right-5 bottom-5 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white shadow-lg ring-1 ring-black/5 transition-all md:h-18 md:w-18"
      >
        <img
          src={ChatbotIcon}
          alt="Chatbot"
          className="h-8 w-8 object-contain md:h-10 md:w-10"
        />
      </motion.button>
    </>
  )
}

export default FloatingChatbot

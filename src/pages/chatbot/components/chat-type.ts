export type ChatMessage = {
  id: number
  sender: "bot" | "user"
  message: string
  isTyping?: boolean
}

import { apiRequest } from "@/services"

type ChatResponse = {
  response: string
}

/**
 *
 * @description send message to chatbot
 */
export const sendChatMessage = async (
  message: string
): Promise<ChatResponse> => {
  return await apiRequest<ChatResponse>("/chat/send", "POST", { message })
}

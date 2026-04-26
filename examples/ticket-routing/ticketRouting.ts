export type ModeratorCommand = "list_new" | "take_ticket" | "reply" | "close"

export function routeModeratorCommand(text: string): ModeratorCommand | null {
  if (text === "/new") return "list_new"
  if (text.startsWith("/take ")) return "take_ticket"
  if (text.startsWith("/reply ")) return "reply"
  if (text.startsWith("/close ")) return "close"
  return null
}

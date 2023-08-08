import { DiscordEvent } from "../interfaces/DiscordEvent";

export const ready: DiscordEvent<"ready"> = {
  event: "ready",
  listener: (client) => {
    console.log(`ready: ${client.user.id}`);
  },
};

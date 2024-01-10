import { getCommands, zEnv } from "@/utils";
import { REST, Routes } from "discord.js";

(async () => {
  const commands = getCommands().map((command) => command.command.toJSON());

  console.log(`deploy global: start x${commands.length}`);

  const rest = new REST().setToken(zEnv.TOKEN);

  try {
    await rest.put(Routes.applicationCommands(zEnv.CLIENT_ID), {
      body: commands,
    });

    console.log(`deploy global: success x${commands.length}`);
  } catch (error) {
    console.error(error);
  }
})();

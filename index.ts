import { Client, Intents } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("Bot is Ready!");
});

client.on("messageCreate", (message) => {
  if (message.content.split(" ")[0] === "recommend") {
    if (message.content.split(" ")[1] === "python") {
      message.reply({
        content:
          "Check out the following links:\n 1) Official Docs - https://www.python.org/\n 2) Python Tutorial - https://www.youtube.com/watch?v=rfscVS0vtbw\n",
      });
    } else {
      message.reply({
        content: "Avi is God!",
      });
    }
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);

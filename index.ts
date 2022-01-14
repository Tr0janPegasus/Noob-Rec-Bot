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
  if (message.content === "recommend") {
    message.reply({
      content: "Avi is God!",
    });
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);

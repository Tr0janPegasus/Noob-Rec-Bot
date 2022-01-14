import { Client, Intents } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  if (interaction.commandName.split(" ")[0] === "#recommend") {
    await interaction.reply("Avi is my God!");
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);

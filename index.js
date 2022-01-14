"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client = new discord_js_1.Client({
    intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES],
});
client.on("ready", () => {
    console.log("Bot is Ready!");
});
client.on("messageCreate", (message) => {
    if (message.content.split(" ")[0] === "recommend") {
        if (message.content.split(" ")[1] === "python") {
            message.reply({
                content: "Check out the following links:\n 1) Official Docs - https://www.python.org/\n 2) Python Tutorial - https://www.youtube.com/watch?v=rfscVS0vtbw\n",
            });
        }
        else {
            message.reply({
                content: "Avi is God!",
            });
        }
    }
});
client.login(process.env.DISCORD_BOT_TOKEN);

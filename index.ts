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
  if (message.content === ">avi") {
    message.reply({
      content:
        "Currently, I am a learner, developer, student, and social entrepreneur. I love to learn anything new, especially, in the field of tech. Previously, I have worked in development and leadership roles in the field of tech at various student organizations. In the future, I wish to further my career in tech.\n Apart from my career, I enjoy gaming, reading novels, watching movies, and anime.✌\n I am always happy to chat, feel free to contact me. 😁\n\n Follow me on Github: https://github.com/AviAvinav",
    });
  } else if (message.content === ">help") {
    message.reply({
      content:
        "Noob Rec Bot is a bot that help out beginner programmers in their journey. It recommends youtube videos and other free resources.\n\nTo use a command prefix it with `>recommend`.\n Example usage: `>recommend python` recommends python learning resources\n\n These are the available commands:\n 1) python\n 2) webdev\n 3) flutter\n 4) webdev next.js\n\n Maintained and Created by Avi Avinav",
    });
  } else if (message.content.split(" ")[0] === ">recommend") {
    if (message.content.split(" ")[1] === "python") {
      message.reply({
        content:
          "Check out the following links:\n\n 1) Official Docs - https://www.python.org/\n 2) Python Tutorial - https://www.youtube.com/watch?v=rfscVS0vtbw\n",
      });
    } else if (message.content.split(" ")[1] === "webdev") {
      message.reply({
        content:
          "Check out the following links:\n\n 1) Web Dev Simplified Channel - https://www.youtube.com/c/WebDevSimplified\n 2) Sonny Sangha's Channel for React.js - https://www.youtube.com/c/SonnySangha\n 3) Fireship Channel - https://www.youtube.com/c/Fireship\n 4) Traversy Media Channel - The God of Web Dev Tutorials - https://www.youtube.com/c/TraversyMedia\n 5) Jack Herrigton's Channel for Typescript - https://www.youtube.com/c/JackHerrington\n 6) Kevin Powell - The CSS King - https://www.youtube.com/kepowob6",
      });
    } else if (message.content.split(" ")[1] === "flutter") {
      message.reply({
        content:
          "Check out the following links:\n\n 1) Official Docs - https://flutter.dev/\n 2) The Flutter Way Channel - https://www.youtube.com/c/TheFlutterWay\n 3) Fireship Channel - https://www.youtube.com/c/Fireship\n 4) Marcus Ng's Channel - https://www.youtube.com/c/MarcusNg\n 5) Official Flutter Channel - https://www.youtube.com/c/flutterdev",
      });
    } else if (
      message.content.split(" ")[1] === "webdev" &&
      message.content.split(" ")![2] === "next.js"
    ) {
      message.reply({
        content:
          "Check out the following links:\n\n 1) Official Docs - https://nextjs.org/\n 2) Next.js in 100 seconds - Fireship - https://youtu.be/Sklc_fQBmcs\n 3) Next.js for beginners - freecodecamp - https://youtu.be/1WmNXEVia8I\n 4) Lee Robinson's Channel - https://www.youtube.com/user/MaStaleee\n 5) Sonny Sangha's Channel (Highly Recommended, Personal Favorite) - https://www.youtube.com/c/SonnySangha",
      });
    }
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);

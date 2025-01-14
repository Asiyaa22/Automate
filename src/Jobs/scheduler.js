import cron from "node-cron";
import  pushToTwitter  from "../services/appServices.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve the path to the JSON file
const jsonFilePath = path.resolve(__dirname, "../data/tweet.json");


//Loading JSON data
const data = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));

// console.log("Data of tweets", data);
const schedulePost = () => {
    console.log("SchedulPost function started");
    data.forEach((quote) => {
    // converting time in cron format
    // const [hour, minute] = time.split(":");
    // console.log(`tweet "${quote} will be pushed at minute ${minute} and hour ${hour}`);
    cron.schedule("* * * * *", () => {
        console.log(`Posting tweet: "${quote}"`);
        pushToTwitter(quote);
    });
});
}

export default schedulePost;
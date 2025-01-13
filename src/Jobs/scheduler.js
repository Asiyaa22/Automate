import cron from "node-cron";
// import data from "../data/data.json" assert { type: "json" };
import  pushToTwitter  from "../services/appServices.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve the path to the JSON file
const jsonFilePath = path.resolve(__dirname, "../data/data.json");


//Loading JSON data
const data = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));

const schedulePost = () => {
    
    data.forEach(({ quote, time}) => {
    //converting time in cron format
    const [hour, minute] = time.split(":");
    cron.schedule(`${minute} ${hour} * * *`, () => {
        console.log(`Posting tweet: "${quote}" at ${time}`);
        pushToTwitter(quote);
    });
});
}

export default schedulePost;
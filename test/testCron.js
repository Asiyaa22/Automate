import cron from "node-cron";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//defining paths for our files or locating
const jsonFilePath = path.resolve(__dirname, "../src/data/tweet.json");
const jsonWritePath = path.resolve(__dirname, "../src/data/data.json");

//loading data
const tweet = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));
const postedTweets = JSON.parse(fs.readFileSync(jsonWritePath, "utf8"));

const schedulePost = () => {
    cron.schedule("* * * * *", () => {
        if(tweet.length > 0){
        let quote = tweet.shift();
        console.log(quote);
        postedTweets.push(quote);
        console.log("executed");
        fs.writeFileSync(jsonFilePath, JSON.stringify(tweet, null, 2)); // Save remaining data
        fs.writeFileSync(jsonWritePath, JSON.stringify(postedTweets, null, 2)); // Save posted tweets
        return;
    }else{
        console.log("No more quotes to be executed");
    }
    })
}

schedulePost();

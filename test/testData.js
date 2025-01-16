// import data from "./src/data/data.json" assert { type: "json"};
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
// import postedTweets from "../src/data/data.json" assert { type: 'json'};


// Get the directory of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve the path to the JSON file
const jsonFilePath = path.resolve(__dirname, "../src/data/tweet.json");
const jsonPostedPath = path.resolve(__dirname, "../src/data/data.json");


//Loading JSON data
const tweet = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));
const postedTweets = JSON.parse(fs.readFileSync(jsonPostedPath, "utf8"));


const schedulePost = () => {
    if( tweet.length > 0){
        const { quote, time} = tweet[0]
        console.log("This is the posted tweet", quote);
        console.log("posted");
        const io = tweet.shift();
        postedTweets.push(io);
        console.log("=================");
        //Save updated data and postedTweets back to JSON files
            fs.writeFileSync(jsonFilePath, JSON.stringify(tweet, null, 2)); // Save remaining data
            fs.writeFileSync(jsonPostedPath, JSON.stringify(postedTweets, null, 2)); // Save posted tweets
    }else{
        console.log("no more quotes available for posting");
    }
}
// const { quote, time } = data[0]
// console.log(quote);
schedulePost();
console.log("data", tweet);
// console.log("posted dtaa", posted);
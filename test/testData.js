// import data from "./src/data/data.json" assert { type: "json"};
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory of the current file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve the path to the JSON file
const jsonFilePath = path.resolve(__dirname, "../src/data/tweet.json");


//Loading JSON data
const data = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));
function test(){
    console.log(data);
}
test();
import express from "express";
import bodyParser from "body-parser";

// import { postToTwitter } from "src/services/appServices.js"
import schedulePost from "./src/Jobs/scheduler.js"

const app = express();
const port = 4000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("Working on Automation🚀")
});

app.listen(4000, () => {
    console.log(`Server is running🏃‍♀️ on port ${port}`)
    console.log("Initialising schedulePost function");
    schedulePost();
});
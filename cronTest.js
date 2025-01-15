import cron from "node-cron";
import pushToTwitter from "./src/services/appServices.js";

let data = [{
    "quote": "bhai you can do it!!",
    "time": "8:58"
},
{
    "quote": "The only thing stopping You Is You!",
    "time": "8:56"
}
]

const scheduleTask = () => {
    data.forEach(({quote, time}) => {
        const [hour, minute] = time.split(":");

        cron.schedule(`${minute} ${hour} * * *`, () => {
            console.log("Cron job is running every minute");
            console.log("Quote is:", quote);
            pushToTwitter(quote);
        });
    })
};

scheduleTask();
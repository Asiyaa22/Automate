import cron from "node-cron";

cron.schedule("* * * * *", () => {
    console.log("Cron job is running every minute");
});
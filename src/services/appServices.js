import env from "dotenv";
import { TwitterApi } from "twitter-api-v2"

env.config();

const twitterClient = new TwitterApi({
    apikey: process.env.TWITTER_API_KEY,
    apisecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_SECRET,
});


const pushToTwitter = async (quote) => {
    try{
        const tweet = await twitterClient.v2.tweet(quote)
        return console.log("Twitter post:", tweet);
    }catch(err){
        console.log("Error in posting", err);
    }
    console.log("posted success🏁");
}

// const pushToThread = async () => {

// }

export default pushToTwitter ;
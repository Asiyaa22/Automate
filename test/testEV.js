import env from "dotenv";
import { TwitterApi } from "twitter-api-v2";

env.config();
(async () => {
    try{
        const client = new TwitterApi({
            appKey: process.env.TWITTER_API_KEY,
            appSecret: process.env.TWITTER_API_SECRET,
            accessToken: process.env.TWITTER_ACCESS_TOKEN,
            accessSecret: process.env.TWITTER_ACCESS_SECRET,
        });
        //testing your credentials
        const user = await client.currentUser();
        console.log(`Authenticated user:`, user);
    }catch(error){
        console.error(`Error authenticating`, error);
    }
})();

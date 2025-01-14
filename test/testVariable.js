import env from "dotenv";
env.config();

function testVariables(){
    console.log("Api KEY:", process.env.TWITTER_API_KEY);
}

testVariables();
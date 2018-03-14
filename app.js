// ############## <For Heroku Development> ###############
const express = require('express');
const app = express();
// ############## </For Heroku Development> ###############


var CronJob = require('cron').CronJob;
var twilio = require('twilio');
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);
const companyNum = '+12345678910' // Change to your Company's Twillio number provided on your account

// values
// if '*', then it means every.
var Schedule = new CronJob('00 30 9 * * 1-5', function() {// Executes code inside once at time dependency
  /*
   * Runs every weekday (Monday [1] through Friday [5])
   * at  9:30 AM. It does not run on Saturday or Sunday
   */
  const Num = 12345678910;
	const Message = "This is an test";
	const MediaUrl = "https://i.ytimg.com/vi/fSE00NLiYls/maxresdefault.jpg";

   client.messages.create({
    body: Message,
    to: Num,
    from: companyNum,
    mediaUrl: MediaUrl,
    }).then((message) => process.stdout.write(message.sid));

  }, null, true, 'America/New_York'); 


// ######################## Below is just for Heroku Development #############################
app.get('/', function (req, res) {
  res.send('Server is Online!')
});
console.log("System is online");
const PORT = process.env.PORT || 5000; // Heroku dynamic port
app.listen(PORT);



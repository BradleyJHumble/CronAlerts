var CronJob = require('cron').CronJob;
var twilio = require('twilio');
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);
const companyNum = '+12345678910' // Change to your Company's Twillio number provided on your account

// values
// if '*', then it means every.
var Seconds = 00; // range is 00-59
var Minutes = 15; // range is 00-59
var Hour = 9; // range is 0-23
var DaysOfMonth = '*' // range is 1-31
var Months = '*' // range is 0-11
var DaysOfWeek = '1-5' // value is as an range, 0 = sunday while 6 = saturday. Total range is 0-6

var job = new CronJob( Seconds + Minutes + Hour + DaysOfMonth + Months + DaysOfWeek, function() {
  /*
   * Runs every weekday (Monday [1] through Friday [5])
   * at  9:15 AM. It does not run on Saturday or Sunday
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

  }, function () {
    /*
     * This function is executed when the job stops
     */
     console.log("Message sent!");
  },
  true,
  timeZone
);

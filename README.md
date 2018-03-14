# CronAlerts
Sending alerts via sms by Twilio and by time variables by the cron package.

A lot of notes in the App.js file

To end cron functions you need to give it an name and then call it to stop.

So for an example 

var ExampleCron = new CronJob('* * * * * *', function() { // runs every second

}, null, true, 'America/New_York'); // the true is for automatically to start it

// otherwise you can set it to false and start it by ExampleCron.start();

To stop this you have to run ExampleCron.stop();

What I like to do is have an cron function inside another one.

One to start it at an certain time and the other to keep running every minute/second if need be.

This is for set data analytics by an time interval. Otherwise you can use an package like 'forever' to 
keep running your application/functions

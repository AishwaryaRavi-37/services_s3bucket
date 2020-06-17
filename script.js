// var AWS = require("aws-sdk");
// var credentials = new AWS.SharedIniFileCredentials({profile: ''});
// AWS.config.credentials = credentials;

var AWS = require("aws-sdk");
AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
  }
});
console.log("Region: ", AWS.config.region);

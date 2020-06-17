var AWS = require('aws-sdk');
AWS.config.update({region: 'ap-south-1'});
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// list buckets
// s3.listBuckets(function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data.Buckets);
//   }
// });

var bucketParams = {
  Bucket : process.argv[2],
  ACL : 'public-read'
};
// create s3bucket
s3.createBucket(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("S3 Bucket Created. Success!", data.Location);
  }
});

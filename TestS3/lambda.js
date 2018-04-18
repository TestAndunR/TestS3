let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {

	console.log("File uploaded to S3");
	callback(null,'Successfully executed');
}
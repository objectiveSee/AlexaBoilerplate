var alexa = require('alexa-app');
var app = new alexa.app();
var find = require('find-my-iphone');
var config = require('config');

/**
 * LaunchRequest.
 */
app.launch(function(request,response) {
	response.say('tell your phone what?');
});


/**
 * IntentRequest.
 */
app.intent('callPhone',
  {
    'utterances':[ 'to call my phone', 'call my phone', 'call my iphone', 'to make noise', 'to find itself' ]
  },
  function(request,response) {

  	var username = config.get('Apple.username');
	var password = config.get('Apple.password');
	var device = config.get('Apple.device');

	if (!username || !password || !device ) {
		throw new Error('Missing Apple credentials.');
		return;
	}

	find(username, password, device ,function() {
	    response.say('Find My iPhone sent to '+device).send();
	});

	// response.say('hello!').send();

	return false;

  }
);

/**
 * Error handler for any thrown errors.
 */
app.error = function(exception, request, response) {
    response.say('Sorry, something went wrong.');
};

console.log(app.utterances());

// Connect to lambda
exports.handler = app.lambda();

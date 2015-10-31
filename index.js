var alexa = require('alexa-app');
var app = new alexa.app();

/**
 * LaunchRequest.
 */
app.launch(function(request,response) {
	response.say('Hey there fancy pants!');
	response.card("Hey there fancy pants!","This is an example card");
});


/**
 * IntentRequest.
 */
app.intent('number',
  {
    'slots':{'number':'NUMBER'},
    'utterances':[ 'say the number {1-100|number}' ]
  },
  function(request,response) {
    var number = request.slot('number');
    response.say('You asked for the number '+number);
    response.shouldEndSession(true);
    response.send();
  }
);


/**
 * IntentRequest w/ asynchronous response.
 */
app.intent('checkStatus', 
	{
    	'utterances':[ 
    		'status check', 'what is the status', 'tell me the status'
    	]
  	},
	function(request,response) {
		setTimeout(function() {		// simulate an async request

	        // This is async and will run after a brief delay
	        response.say('Status is operational, mam!');
	    
	        // Must call send to end the original request
	        response.send();
		
		}, 250);

	    // Return false immediately so alexa-app doesn't send the response
	    return false;
	}
);


/**
 * Error handler for any thrown errors.
 */
app.error = function(exception, request, response) {
    response.say('Sorry, something bad happened');
};

// Connect to lambda
exports.handler = app.lambda();

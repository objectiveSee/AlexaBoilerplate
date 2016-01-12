# Alexa Boilerplate

Quickly get started developing Amazon Alexa skills for you Amazon Echo.  After a few short setup steps you will be able to create a functioning skill and deploy it to Amazon Lambda.  The boilerplate app includes two of the best npm modules for creating Alexa skills: [alexa-app](https://github.com/matt-kruse/alexa-app) for providing structure to you application, and [grunt-aws-lambda](https://github.com/Tim-B/grunt-aws-lambda) for uploading your code to Amazon Lambda from the command line by simply typing `grunt deploy`.


## Setup

Configuring the sample app is as easy as pasting the ARN of your Lambda function into `config/default.json` and running `npm install`. That's it! If you don't know how to get your ARN then read "Creating you Lambda function" below.

```
{
	"Amazon" : {
		"lambda-arn" : "YOUR ARN HERE",
	}
}
```

## Deploying to Amazon Lambda

`grunt` makes it easy to deploy code. Just run:

```
grunt deploy
```

## The Sample Project

Check out `index.js` for the boilerplate Alexa app. Examples of how to define an intent handler, build sample utterences and schema, and response asynchronously are all included. You can also see example projects located in the `examples/` directory.

## Creating you Lambda function

Each Alexa skill requires a Lambda function. 

1. Log into the [AWS Lambda Console](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions) and making sure your region is set to `us-east-1`
2. Click "Create Lambda Function"
3. Choose to skip the "Select blueprint" phase
4. Give your function a name and description. For the inital code, just type `{}` which is valid Javascript that does nothing. We will be uploading our code via `grunt` later.
5. Set the role and create your function.
6. Copy the ARN from the top right corner of the function page.

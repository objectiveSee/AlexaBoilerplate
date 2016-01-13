# Find my iPhone Alex Skill

**NOTE** Saving your iTunes password as plain-text has some security risks. Proceed at your own risk. You should understand the security of Lambda and wherever your `default.json` file is being stored.

## Setup

Create a file called `config/default.json` and fill in the required fields:

```js
{
	"Amazon" : {
		"lambda-arn" : "required",
		"profile" : "optional"
	},
	"Apple" : {
		"username": "required",
		"password": "required",
		"device": "required-name of your iOS device"
	}
}

```

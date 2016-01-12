var grunt = require('grunt');
var config = require('config');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({

   lambda_invoke: {
      default: {
      }
   },
   lambda_deploy: {
   	  
      default: {
         arn : config.get('Amazon.lambda-arn'),
         options : {
         	region : 'us-east-1',
         	profile : config.get('Amazon.profile'),
         	file_name: 'index.js'
      	}

      },
   },
   lambda_package: {
      default: {
      	arn : config.get('Amazon.lambda-arn'),
         options : {
         	region : 'us-east-1',
         	profile : config.get('Amazon.profile'),
         	file_name: 'index.js'
      	}
   	  }
   }
});

grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy'])

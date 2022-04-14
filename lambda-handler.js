const AWS = require('aws-sdk');
const lambdaClient = new AWS.Lambda()

module.exports.list_lambda = async (event) => {
    console.debug("I am inside list_lambda");
    console.log("Lambda functions:", lambdaClient.list_functions());
    return {
        statusCode: 200,
        body: JSON.stringify({
            lambda_functions: []
        }, null, 2)
    };
}
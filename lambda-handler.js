const { LambdaClient, ListFunctionsCommand } = require('@aws-sdk/client-lambda');

const client = new LambdaClient({ region: process.env.AWS_DEFAULT_REGION });

module.exports.list_lambda = async () => {
    const command = new ListFunctionsCommand({ region: process.env.AWS_DEFAULT_REGION });
    const response = await client.send(command);
    const functionNames = response.Functions.map((fx) => { return fx.FunctionName; });

    return {
        statusCode: 200,
        body: JSON.stringify({
            lambda_functions: functionNames
        }, null, 2)
    };
}

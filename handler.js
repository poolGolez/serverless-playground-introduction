'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'My second function change! I should be seen',
        input: event,
      },
      null,
      2
    ),
  };
};

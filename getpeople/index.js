const dynamoose = require('dynamoose');

exports.handler = async (event) => {

  const peopleSchema = new dynamoose.Schema({
    'id': Number,
    'name': String,
    'age': Number
  });

  let data = null;
  let status = 500;

  try {
    data = await peopleSchema.scan().exec();
    status = 200;
  } catch (error) {
    data = new Error(error);
    status = 400;
  }
  

  const response = {
    statusCode: 200,
    body: JSON.stringify('Here are some people you might know!', data),
  };
  return response;
};

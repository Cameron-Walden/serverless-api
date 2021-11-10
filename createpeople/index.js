const dynamoose = require('dynamoose');

exports.handler = async (event) => {

  const peopleSchema = new dynamoose.Schema({
    'id': Number,
    'name': String,
    'age': Number
  });

  const peopleTable = dynamoose.model('people', peopleSchema);

  let data = null;
  let status = 500;

 
  
  const response = {
    statusCode: 200,
    body: JSON.stringify(data),
  };
  return response;
};

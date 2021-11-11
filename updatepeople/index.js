const dynamoose = require('dynamoose');

exports.handler = async (event) => {

  const jsonBody = JSON.parse(event.body);

  const peopleSchema = new dynamoose.Schema({
    'id': Number,
    'name': String,
    'age': Number
  });

  const peopleTable = dynamoose.model('people', peopleSchema);

  let data = null;
  let status = 500;
  // let id = parseInt(event.pathParameters.id);

  try{
    const id = event.pathParameters.id
    // const person = new peopleTable({id, ...jsonBody});
    data = await peopleTable.update({id: id});
    // data = await peopleTable.scan.exec();
    status = 200;

  } catch (error){
    status = 400;
    data = new Error(error);
  }

  const response = {
    statusCode: status,
    body: JSON.stringify(data),
    message: 'You have successfully updated a person!'
  };
  return response;
};

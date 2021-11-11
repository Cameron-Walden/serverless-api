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

  try{
    const id = event.pathParameters.id;
    // let id = Math.floor(Math.random() * 100);
    // const person = new peopleTable(id);
    // deletePerson = await peopleTable.delete({id: id});
    data = await peopleTable.delete({id: id});
    status = 200;

  } catch (error){
    status = 400;
    data = new Error(error);
  }

  const response = {
    statusCode: status,
    body: JSON.stringify(data),
    message: 'You have successfully removed a person!'
  };
  return response;
};

import db from './server'
import User_Details from './users-model'

function preflight(callback){
  callback(null, {
    statusCode: 204, 
    headers: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Headers':'*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT',
    },
    body: {},
  });
}

exports.handler = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false 
  if (event.httpMethod === 'OPTIONS'){
    console.log("Calling Preflight: ");
    preflight(callback);
  } else {
    try {
      const request_data = JSON.parse(event.body);
      const user_detail = await User_Details.findOne({email: request_data.email})
      callback(null, {
        statusCode: 200,
        headers: {
          'Content-Type':'application/json',
        },
        body: JSON.stringify(user_detail)
      })
    } catch (err){
      console.log(err)
      callback(null, {
        statusCode: 500, 
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Request-Headers': '*',
        },
        body: JSON.stringify({msg: err.message})
      })
    }
  }
}
	
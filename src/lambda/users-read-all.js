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

exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false, 
  if (event.httpMethod === 'OPTIOMS'){
    console.log("Calling Preflight: ");
    preflight(callback);
  } else {
    try {
      const users_detail = await User_Details.find(), 
            response = {
              msg: "Users successfully found",
              data: users_detail
            }
      return {
        statusCode: 200, 
        headers: {
          'Content-Type':'application/json',

        }
      }
    }
  }
}
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
      const users_detail = await User_Details.find()
      return {
        statusCode: 200, 
        headers: {
          'Content-Type':'application/json',
          'X-Total-Count':users_detail.length
        }, 
        body: JSON.stringify(users_detail)
      }
    } catch (err) {
      console.log(err) // output to netlify function log
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Request-Headers': '*',
        },
        body: JSON.stringify({msg: err.message})
      }
    }
  }
}
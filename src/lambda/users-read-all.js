import db from './server'
import User_Details from './users-model'

function preflight(callback){
  return callback(null, {
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
    preflight(callback);
  } else {
    try {
      await User_Details.find({},function(err, data){
        if(err){
          return callback(null, {
            statusCode: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Request-Headers': '*',
            },
            body: JSON.stringify({msg: err.message})
          })
        }
        return callback(null, {
          statusCode: 200, 
          headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Headers': '*'
          }, 
          body: JSON.stringify(data)
        })
      })
    } catch (err) {
      return callback(null, {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Request-Headers': '*',
        },
        body: JSON.stringify({msg: err})
      })
    }
  }
}
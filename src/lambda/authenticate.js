import db from './server'

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
  const data = event.body;
    if (data.pass = "lume_staffs"){
    	return callback(null, {
    		statusCode: 200, 
        headers: {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Request-Headers': '*'
        }, 
    		body: JSON.stringify({
    		 	token: '13-22-6-212',
    		 	message: 'Welcome Lume Staffs Members'
    		})
    	})
    } else {
    	return callback(null, {
    		statusCode: 403,
        headers: {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Request-Headers': '*'
        }, 
    		body: JSON.stringify({
    			message: 'Wrong password, please try again'
    		})
    	})
    }
  }
}
	
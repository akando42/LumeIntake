import db from './server'
import User_Details from './users-model'

exports.handler = async (event, context, callback) => {
  try {
    const users_detail = await User_Details.find()
    return callback(null, {
      statusCode: 200, 
      headers: {
        'Content-Type':'application/json',
        'X-Total-Count':users_detail.length,
      }, 
      body: JSON.stringify(users_detail)
    })
  } catch (err) {
    return callback(null, {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({msg: err.message})
    })
  }
}
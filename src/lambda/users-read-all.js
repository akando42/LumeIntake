import db from './server'
import User_Details from './users-model'

exports.handler = async (event, context, callback) => {
  try {
    var users_detail = await User_Details.find()
    var response = {
      msg: "These are users data",
      data: users_detail
    }
    return callback(null, {
      statusCode: 200, 
      headers: {
        'Content-Type':'application/json',
        'X-Total-Count':users_detail.length,
      }, 
      body: JSON.stringify(response)
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
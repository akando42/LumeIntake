import mongoose from 'mongoose'
import db from './server'

import UsersDetail from './users-model'

exports.handler = async (event, context, callback) => {
  try {
    const data = JSON.parse(event.body)
    const email = data.email 
    const user_details = data.user_details
    const response = {
      msg: "Successful update user_details", 
      data: user_details
    }
    await UsersDetail.findOneAndUpdate({email: email},user_details)
    return {
      statusCode: 201,
      body: JSON.stringify(response)
    }
  } catch(err){
    console.log("Fail to Update User Details", err)
    return {
      statusCode: 500, 
      body: JSON.stringify({
        msg: err.message, 
        data: JSON.parse(event.body)
      })
    }
  }
}
	
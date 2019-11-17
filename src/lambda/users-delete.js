import mongoose from 'mongoose'
import db from './server'
import User_Details from './users-model'

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false

  try {
    const id = JSON.parse(event.body),
          response = {
            msg: "User Successfully deleted"
          }

    await User_Details.findOneAndDelete({_id: id})
    
    return {
      statusCode: 201,
      body: JSON.stringify(response)
    }
  } catch(err){
    console.log('DELELTE USER DETAIL ISSUE', err)
    return {
      statusCode: 500, 
      body: JSON.stringify({msg: err.message})
    }
  }
}
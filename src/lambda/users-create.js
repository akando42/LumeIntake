import mongoose from 'mongoose'
import db from './server'
import User_Details from './users-model'

const axios = require('axios')
const instance = axios.create({
  baseURL: '',
  timeout: 1000,
  auth: {
    username: '',
  	password: ''
  }
})

  exports.handler = async (event, context, callback) => {
  const request_data = JSON.parse(event.body);
  try {
    const id = mongoose.Types.ObjectId();
    const name = request_data.name;
    const email = request_data.email;
    const dob = request_data.dob;
    const emergencyContact = request_data.emergencyContact;
    const reason_for_visit = request_data.reason_for_visit;
    const life_style = request_data.life_style;
    const priorities = request_data.priorities;
    const feels_stress = request_data.feels_stress;
    const feels_mood = request_data.feels_mood;
    const feels_focus = request_data.feels_focus;

    const user_detail = {
      _id: id, 
      id: id,
      name: name, 
      email: email, 
      dob: dob,
      emergencyContact: emergencyContact,
      reason_for_visit: reason_for_visit,
      life_style: life_style,
      priorities: priorities,
      feels_stress: feels_stress,
      feels_mood: feels_mood,
      feels_focus: feels_focus
    }
    await User_Details.create(user_detail);

    const response = {
      msg: "User successfully created",
      data: user_detail
    }
    
    return {
      statusCode: 201, 
      body: JSON.stringify(response)
    }
  } catch(err){
    console.log("USER____CREATE_____ERROR", err);
    return {
      statusCode: 500, 
      body: JSON.stringify({
        msg: err.message
      })
    }
  }
}
	
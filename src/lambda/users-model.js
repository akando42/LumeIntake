// userModel.js
import mongoose from 'mongoose'


// Set User Detail Schema
const schema = new mongoose.Schema({
        _id: mongoose.Schema.Types.ObjectId,
        id:mongoose.Schema.Types.ObjectId,
        name: {
          type: String,
          required: [false, 'Name field is required'],
          max: 100
        },
        email: {
          type: String,
          required: [false, 'Email field is required']
        },
        dob: {
          type: String,
          required: [false, 'Date of Birth is required']
        },
        emergencyContact: {
          type: String,
          required: [false, 'Emergency Contact is required']
        }, 
        reason_for_visit: {
          type: String,
          required: [false, 'Reason for Visiting']
        },
        life_style: {
          type: String,
          required: [false, 'Life Style of the User']
        }, 
        priorities: {
          type: String, 
          required: [false, 'Priorities of the Quiz']
        },
        feels_stress: {
          type: String, 
          required: [false, 'Level of Stress']
        },
        feels_mood: {
          type: String,
          required: [false, 'Level of Mood']
        }, 
        feels_focus: {
          type: String, 
          required: [false, 'Level of Focus']
        }
      }, { _id: false }),

      User_Details = mongoose.model('user_details', schema)

export default User_Details
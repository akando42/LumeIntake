import db from './server'

const axios = require('axios')

const instance = axios.create({
  baseURL: '',
  timeout: 1000,
  auth: {
    username: '',
  	password: ''
  }
})

exports.handler = (event, context, callback) => {
  // "event" has informatiom about the path, body, headers etc of the request
  console.log('event', event)
  const data = event.body;
  if (data.pass = "lume_staffs"){
  	return callback(null, {
  		statusCode: 200, 
  		body:L JSON.stringify({
  		 	token: '13-22-6-212',
  		 	message: 'Welcome Lume Staffs Members'
  		})
  	})
  } else {
  	return callback(null, {
  		statusCode: 402
  		body: JSON.stringify({
  			message: 'Wrong password, please try again'
  		})
  	})
  }
}
	
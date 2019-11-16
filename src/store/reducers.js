import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import App from './app/reducer'
import Strike from './strike/reducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  	app: App,
	strike: Strike
})

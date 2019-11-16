import actions from './action';

const initialState = {
	apiProcessing: false,
	showNotification: true
}

export default function appReducer(state = initialState, action) {
	switch(action.type) {
		case actions.API_CALL_START:
			return {
				...state, 
				apiProcessing: true
			}
		case actions.API_CALL_END:
			return {
				...state, 
				apiProcessing: false
			}
		case actions.TOGGLE_SHOW_NOTIFICATION:
			return {
				...state, 
				showNotification: !state.showNotification
			}
		default:
			return state;
	}
}

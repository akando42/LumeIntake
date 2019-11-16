const actions = {
	API_CALL_START: 'API_CALL_START',
	API_CALL_END: 'API_CALL_END',
	TOGGLE_SHOW_NOTIFICATION: 'TOGGLE_SHOW_NOTIFICATION',

	toggleShowNotification: () => (dispatch) => {
		dispatch({ type: actions.TOGGLE_SHOW_NOTIFICATION })
	}
}

export default actions;

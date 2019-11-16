const actions = {
  SET_STRIKE: 'SET_STRIKE',

  setStrike: (data) => (dispatch) => {
    dispatch({ type: actions.SET_STRIKE, data: data })
  }
}

export default actions

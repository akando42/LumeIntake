import actions from './action'

const initialState = {
  name: '',
}

export default function sitesReducer(state = initialState, action) {
  switch(action.type) {
    case actions.SET_SUMMARY:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

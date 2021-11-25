import { ADD2, DEC2 } from "../actions/actionTypes"
const initialState = {
  counter: 0,
  sex: true
}
export default function counter2(state = initialState, action) {
  switch (action.type) {
    case ADD2:
      return { ...state, counter: state.counter + action.payload }
    case DEC2:
      return { ...state, counter: state.counter - action.payload }
    default:
      return state
  }
}

import { ADD, ADD_NUMBER, DEC,ASYNC_INC } from "../actions/actionTypes"
const initialState = {
  counter: 100,
  sex: true
}
export default function counter1(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { ...state, counter: state.counter + 1 }
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.payload }
    case DEC:
      return { ...state, counter: state.counter - 1 }
    case ASYNC_INC:
      return { ...state, counter: state.counter + action.payload }
    default:
      return state
  }
}

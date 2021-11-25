import { ADD, DEC, ADD_NUMBER, ADD2, DEC2, ASYNC_INC } from "./actionTypes"
export function increment() {
  return {
    type: ADD
  }
}
export function decrement() {
  return {
    type: DEC
  }
}
export function add_number(number) {
  return {
    type: ADD_NUMBER,
    payload: number,
  }
}
export function incrementTwo(number) {
  return {
    type: ADD2,
    payload: number,
  }
}
export function decrementTwo(number) {
  return {
    type: DEC2,
    payload: number,
  }
}
export function incrementAsync(number) {
  return async function (dispatch) {
    await delay(500)
    dispatch({
      type: ASYNC_INC,
      payload: number,
    })
    // setTimeout(() => {
    //   dispatch({
    //     type: ASYNC_INC,
    //     payload: number,
    //   })
    // }, 1500);
  }
}
const delay = (ms) => {
  return new Promise( (resolve,reject) => {
    setTimeout(() => {
      resolve()
    }, ms);
  })
}
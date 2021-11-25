//REDUX THEORY WITH yarn add redux
// const redux = require('redux')
const initialState = {
  counter:0,
  sex:true
}
//REDUCER
// usual js function that make some transformation
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        counter: state.counter + 1
      }
    default:
      return state
  }
}
//STORE
const store = createStore(reducer,initialState)
function createStore(rootReducer, initialState) {
  let state = rootReducer(initialState, {type:'__INIT__'})
  const subscribers = []
  return {
    dispatch(action) {
      state = rootReducer(state,action)
      subscribers.forEach( sub =>  sub() )
    }, 
    subscribe(callback) {
      subscribers.push(callback)
    },
    getState() {
      return state
    }
  }
} // весь redux
store.subscribe(()=> {
  console.log(store.getState())
})
//ACTIONS
const addCounter = {
  type:'ADD'
}
store.dispatch(addCounter)
store.dispatch(addCounter)
store.dispatch(addCounter)
store.dispatch(addCounter)
store.dispatch(addCounter)
store.dispatch(addCounter)
store.dispatch(addCounter)
function abc(){
  debugger
  let state = 'init'
  return{
    test() {
      state = state + '1'
      console.log(state)
    }
  }
} 
const a = abc()
a.test()
a.test()
a.test()
a.test()
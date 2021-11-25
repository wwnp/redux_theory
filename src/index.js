import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux' // compose for DEVTOOLS
import rootReducer from './redux/rootReducer';
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose; // DEVTOOLS

// function loggerMiddleware(store){
//   return function (next){
//     return function (actions){
// const result = next(actions)
// console.log('Middleware', store.getState())
// return result
//     }
//   }
// }
// OR
const loggerMiddleware = store => next => actions => {
  const result = next(actions)
  console.log('Middleware', store.getState())
  return result
}







const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
  loggerMiddleware,
  reduxThunk
)))



const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(
  app,
  document.getElementById('root')
);
reportWebVitals();


// Tie React and Redux : yarn add react-redux
// yarn add redux-thunk (for several rootReducers)

// dev tools in chrome web store add
//// https://github.com/zalmoxisus/redux-devtools-extension#installation
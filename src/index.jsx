import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
/** TODO: import REDUX **/
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

/** TODO: Add REDUCERS */
const airlines = (state = ['Sun Country', 'Delta'], action) => {
  if (action.type === 'ADD_AIRLINE') {
    const newAirline = action.payload;
    return [...state, newAirline];
  }
  return state;
};

/** TODO: Create store */
const airlineStore = createStore(
  combineReducers({
    airlines: airlines,
  }),
  applyMiddleware(logger)
);

// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={airlineStore}>
    <App />
  </Provider>
);

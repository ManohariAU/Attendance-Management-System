import { createStore } from 'redux';

// Define initial state
const initialState = {
  loggedIn: false,
};

// Define reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, loggedIn: true };
    case 'LOGIN_FAILURE':
      return { ...state, loggedIn: false };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(reducer);

export default store;

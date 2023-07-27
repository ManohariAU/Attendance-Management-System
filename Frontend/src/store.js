// store.js
import { createStore } from 'redux';

const initialState = {
  username: '',
  email: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload.username};
    case 'SET_EMAIL':
      return{...state, email:action.payload.email};
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;



// src/stores/rootReducer.ts
import { combineReducers } from 'redux';
import counterReducer from './slices/counterSlice';

export const rootReducer = combineReducers({
  counter: counterReducer,
});

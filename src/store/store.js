import birdsData from '../birdsData.js';
import { combineReducers, createStore } from 'redux';
import answerSlice from './answerSlice.js';
import counterSlice from './counterSlice.js';
import birdSlice from './birdSlice.js';
import changePageSlice from './changePage.js';
import { configureStore } from '@reduxjs/toolkit';
 
const rootRducer = combineReducers({
    toolkit: answerSlice,
    counter: counterSlice,
    bird: birdSlice,
    changePage: changePageSlice,
})
  
export const store = configureStore({
    reducer: rootRducer
})
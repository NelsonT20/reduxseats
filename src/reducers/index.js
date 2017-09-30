import { combineReducers } from 'redux';
import SeatsReducer from './reducer_seats';

const rootReducer = combineReducers({
  seats: SeatsReducer
});

export default rootReducer;
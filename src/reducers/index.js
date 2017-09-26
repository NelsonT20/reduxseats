import { combineReducers } from 'redux';
import SeatsReducer from './reducer_seats';
import ActiveSeat from './reducer_active_seat';

const rootReducer = combineReducers({
  seats: SeatsReducer,
  activeSeat: ActiveSeat
});

export default rootReducer;
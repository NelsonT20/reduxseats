import SeatList from '../components/seat-list';
import { connect } from 'react-redux';
import { selectSeat } from '../actions/index';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = dispatch => {
  return {
    selectSeat: bindActionCreators(selectSeat, dispatch),
  };
}

const mapStateToProps = state => {
  // console.log('state', state.seats[0]);
  return {
    seats: state.seats,
  };  
}

export default connect(mapStateToProps, mapDispatchToProps)(SeatList);

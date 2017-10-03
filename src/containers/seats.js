import SeatList from '../components/seat-list';
import { connect } from 'react-redux';
import { selectSeat, Confirmation } from '../actions/index';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = dispatch => {
  return {
    selectSeat: bindActionCreators(selectSeat, dispatch),
    Confirmation: bindActionCreators(Confirmation, dispatch)
  };
}

const mapStateToProps = state => {
  return {
    seats: state.seats,
  };  
}

export default connect(mapStateToProps, mapDispatchToProps)(SeatList);

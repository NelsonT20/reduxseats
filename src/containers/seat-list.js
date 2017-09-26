import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/style.css';
import { selectSeat } from '../actions/index';
import { bindActionCreators } from 'redux';

class SeatList extends Component {
    renderList() {
        return this.props.seats.map((seat) => {
            return (
                <li
                    key={seat.title}
                    onClick={() => this.props.selectSeat(seat)} 
                    className="list-group-item seat-list">
                    {seat.title}
                </li>
            );
        });
    }

    render() {
        console.log(this.props.seats)
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        seats: state.seats
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectSeat: selectSeat }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SeatList);
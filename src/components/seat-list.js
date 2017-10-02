import React from 'react';
import PropTypes from 'prop-types'
// import '../style/style.css';
import Seat from './seat';

const SeatList = ({ seats, selectSeat }) => (

    <ul className="list-group col-sm-4">
        {seats.map((seat) => (

            <li key={seat.id}>
                <Seat key={seat.id}
                    {...seat}
                    onClick={() => selectSeat(seat)}
                />
            </li>
        ))}
    </ul>
)


SeatList.propTypes = {
    seats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            selected: PropTypes.bool.isRequired,
            title: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    selectSeat: PropTypes.func.isRequired
}

export default SeatList;

import React from 'react';
import PropTypes from 'prop-types'
import Seat from './seat';
import Confirm from './confirm';

const SeatList = ({ seats, selectSeat, infos, Confirmation }) => (
    <ul className="list-group col-sm-8">
        {seats.map((seat) => (
            <div key={seat.id}>
                <div className="col-sm-7  seatlist ">
                    <li key={seat.id}>
                        <Seat key={seat.id}
                            {...seat}
                            onClick={() => selectSeat(seat)}
                        />
                        <Confirm {...seat} onClick={() => Confirmation(seat)}/>
                    </li>
                    
                </div>
            </div>

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
    selectSeat: PropTypes.func.isRequired,
}

export default SeatList;

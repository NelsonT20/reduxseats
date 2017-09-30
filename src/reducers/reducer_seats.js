import { SEAT_SELECTED } from '../actions/index'
// Esto no deberia existir, el initial deberia ser un array vacio
// y cuando se haga el request al servidor se poblarian los seats
const INITIAL_STATE = [ {id: 1, title: 'seat #1', selected: false},
                        {id: 2, title: 'seat #2', selected: false},
                        {id: 3, title: 'seat #3', selected: false},
                        {id: 4, title: 'seat #4', selected: false}
                      ]

export default function(state = INITIAL_STATE, action) {
    switch (action.type){
    case SEAT_SELECTED:
        return state.map(seat => (seat.id === action.payload.selected)
                            ? {...seat, selected: !seat.selected}
                            : seat);
        default:
            return state;
    }
}


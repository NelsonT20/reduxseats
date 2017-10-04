import { SEAT_SELECTED, CONFIRM } from '../actions/index'
// Esto no deberia existir, el initial deberia ser un array vacio
// y cuando se haga el request al servidor se poblarian los seats
const INITIAL_STATE = [{ id: 1, title: 'seat #1', selected: false, confirm: false },
                       { id: 2, title: 'seat #2', selected: false, confirm: false },
                       { id: 3, title: 'seat #3', selected: false, confirm: false },
                       { id: 4, title: 'seat #4', selected: false, confirm: false }
]
let NEW_STATE =[]


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEAT_SELECTED:
            return state.map(seat => (seat.id === action.payload.selected)
                ? { ...seat, selected: !seat.selected }
                : seat);
        case CONFIRM:
            return( alert('are you sure?'),
                state.map(seat => ((seat.id === action.payload.confirm) && seat.selected)
                ? {...seat, confirm: !seat.confirm}
                :seat).filter(seat=>((seat.id) && (seat.id) && (seat.confirm))
                ?NEW_STATE.push(...seat)
                :NEW_STATE)
            )
        default:
            return state;
    }
}


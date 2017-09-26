export default function(state = null, action) {
    switch (action.type) {
        case 'SEAT_SELECTED':
            return action.payload;
            
        default:        
        break;
    }


    return state;
}
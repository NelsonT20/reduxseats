export function selectSeat(seat) {
    return {
        type: 'SEAT_SELECTED',
        payload: seat
    };
}
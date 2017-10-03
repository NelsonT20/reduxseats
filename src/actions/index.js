
export const SEAT_SELECTED = 'SEAT_SELECTED';
export const SELECTED = 'SELECTED';

export function selectSeat(seat) {
    const payload = { selected: seat.id }
    return {
        type: 'SEAT_SELECTED',
        payload
    };
}

export function Confirmation(seat) {
    const payload = { selected: seat.id }
    return {
        type: 'SELECTED',
        payload
    };

}
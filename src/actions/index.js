
export const SEAT_SELECTED = 'SEAT_SELECTED';
export const CONFIRM = 'CONFIRM';

export function selectSeat(seat) {
    const payload = { selected: seat.id }
    return {
        type: 'SEAT_SELECTED',
        payload
    };
}

export function Confirmation(seat) {
    const payload = { confirm: seat.id }
    return {
        type: 'CONFIRM',
        payload
    };

}
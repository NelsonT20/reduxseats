
export const SEAT_SELECTED = 'SEAT_SELECTED';

export function selectSeat(seat) {
    const payload = { selected: seat.id }
    return {
        type: 'SEAT_SELECTED',
        payload
    };
}
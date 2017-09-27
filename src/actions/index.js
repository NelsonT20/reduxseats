export function selectSeat(seat) {
    if (seat.title === "Seat 1!") {
            document.getElementById("2").style.visibility = "hidden";
            document.getElementById("3").style.visibility = "hidden";
            document.getElementById("4").style.visibility = "hidden";
            document.getElementById("5").style.visibility = "hidden";
    }else if(seat.title === "Seat 2!"){
        document.getElementById("1").style.visibility = "hidden";
        document.getElementById("3").style.visibility = "hidden";
        document.getElementById("4").style.visibility = "hidden";
        document.getElementById("5").style.visibility = "hidden";
    }else if(seat.title === "Seat 3!"){
        document.getElementById("1").style.visibility = "hidden";
        document.getElementById("2").style.visibility = "hidden";
        document.getElementById("4").style.visibility = "hidden";
        document.getElementById("5").style.visibility = "hidden";
    }else if(seat.title === "Seat 4!"){
        document.getElementById("1").style.visibility = "hidden";
        document.getElementById("2").style.visibility = "hidden";
        document.getElementById("3").style.visibility = "hidden";
        document.getElementById("5").style.visibility = "hidden";
    }else if(seat.title === "Seat 5!"){
        document.getElementById("1").style.visibility = "hidden";
        document.getElementById("2").style.visibility = "hidden";
        document.getElementById("3").style.visibility = "hidden";
        document.getElementById("4").style.visibility = "hidden";
    }
    return {
        type: 'SEAT_SELECTED',
        payload: seat
    };
}
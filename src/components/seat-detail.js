import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../style/style.css';

class SeatDetail extends Component {

    handleClick(data) {
        if (data.title === "Seat 1!") {
            alert('you choose the seat # 1')
            document.getElementById("2").style.visibility = "visible";
            document.getElementById("3").style.visibility = "visible";
            document.getElementById("4").style.visibility = "visible";
            document.getElementById("5").style.visibility = "visible";
        }else if (data.title === "Seat 2!") {
            alert('you choose the seat # 2')
            document.getElementById("1").style.visibility = "visible";
            document.getElementById("3").style.visibility = "visible";
            document.getElementById("4").style.visibility = "visible";
            document.getElementById("5").style.visibility = "visible";
        }else if (data.title === "Seat 3!") {
            alert('you choose the seat # 3')
            document.getElementById("1").style.visibility = "visible";
            document.getElementById("2").style.visibility = "visible";
            document.getElementById("4").style.visibility = "visible";
            document.getElementById("5").style.visibility = "visible";
        }else if (data.title === "Seat 4!") {
            alert('you choose the seat # 4')
            document.getElementById("1").style.visibility = "visible";
            document.getElementById("2").style.visibility = "visible";
            document.getElementById("3").style.visibility = "visible";
            document.getElementById("5").style.visibility = "visible";
        }else if (data.title === "Seat 5!") {
            alert('you choose the seat # 5')
            document.getElementById("1").style.visibility = "visible";
            document.getElementById("2").style.visibility = "visible";
            document.getElementById("3").style.visibility = "visible";
            document.getElementById("4").style.visibility = "visible";
        }
    }

    render() {
        const data= this.props.seat;

        if (!this.props.seat) {
            return <div><h3>Select a Seat to get started.</h3></div>
        }

        return (
            <div>
                <h3>Details for the Seat:</h3>
                <div>
                    <div className="seat" id={this.props.seat.number}>
                        You select the Number: {this.props.seat.number}
                    </div>
                    <div><button className="btn-success" onClick={this.handleClick.bind(null, data)}>Confirm</button></div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        seat: state.activeSeat
    };
}

export default connect(mapStateToProps)(SeatDetail);
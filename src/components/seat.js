import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../style/style.css';

class Seat extends Component {
  render() {
    const { id, title, selected } = this.props;
    let className = `list-group-item seat-list col-sm-6`

    if (selected) {
      className = `${className} selected`
    } else if (!selected) {
      className = `${className} unselected`
    }

    function confirm() {
      let foo = document.getElementById(id);
      let btn = document.getElementById(title);

      if ((title === "seat #1") && (selected)) {

        if (window.confirm("Are you sure you want this seat?") === true) {
          window.alert('you select the seat 1')
          foo.className = `${className} disabledbutton`;
          btn.disabled = true;
        } else {
          window.alert('you cancel the choose')

        }

      } else if ((title === "seat #2") && (selected)) {

        if (window.confirm("Are you sure you want this seat?") === true) {
          window.alert('you select the seat 2')
          foo.className = `${className} disabledbutton`;
          btn.disabled = true;
        } else {
          window.alert('you cancel the choose')

        }

      } else if ((title === "seat #3") && (selected)) {

        if (window.confirm("Are you sure you want this seat?") === true) {
          window.alert('you select the seat 3')
          foo.className = `${className} disabledbutton`;
          btn.disabled = true;
        } else {
          window.alert('you cancel the choose')

        }

      } else if ((title === "seat #4") && (selected)) {

        if (window.confirm("Are you sure you want this seat?") === true) {
          window.alert('you select the seat 4')
          foo.className = `${className} disabledbutton`;
          btn.disabled = true;
        } else {
          window.alert('you cancel the choose')

        }
      }
    }


    return (
      <div className="col-sm-5">
        <div id={id}
          key={title}
          onClick={() => this.props.onClick()}
          className={className}>
          {title}
        </div>
        <div className="col-sm-1"><button id={title} className="btn btn-success" onClick={() => confirm(this.props)}>click</button></div>
      </div>
    );
  }
}

Seat.propTypes = {
  selectSeat: PropTypes.func.isRequired,
};

export default Seat;

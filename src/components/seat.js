import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import '../style/style.css';

class Seat extends Component {
  render() {
    const { id, title, selected } = this.props;
    let className = `list-group-item seat-list`
    if (selected) { className = `${className} selected` }
    return (
      <div>
        <div id={id}
          key={title}
          onClick={() => this.props.onClick()}
          className={className}>
          {title}
        </div>
      </div>
    );
  }
}

Seat.propTypes = {
  selectSeat: PropTypes.func.isRequired,
};

export default Seat;

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import '../style/style.css';

class Seat extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onSelect = this.onSelect.bind(this);
  //   this.selectedClass = this.selectedClass.bind(this);
  // }

  // onClick(props){
  //   this.props.selectSeat(props);

  // }

  render() {
    const { id, title, selected } = this.props;
    let className = `list-group-item seat-list`
    if (selected) { className = `${className} selected` }
    return (
      <div>
        <div id={id}
          key={title}
          onClick={() => this.props.onClick()}
          className={selected}>
          {title}
        </div>
      </div>
    );
  }
}

Seat.propTypes = {
  selectSeat: PropTypes.func.isRequired,
  selected: PropTypes.object.isRequired,
};

export default Seat;
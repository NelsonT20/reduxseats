import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

class Confirm extends Component {
    render() {

        return (
            <div className="col-sm-2">
                <button className="btn btn-success" onClick={()=> this.props.onClick()}>Confirm</button>
            </div>
        )
    }

}

export default Confirm;
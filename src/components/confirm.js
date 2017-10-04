import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Confirm extends Component {
    render() {
        //estara en comentarios mientras
        // const { id, title, selected } = this.props;
        // let { confirm } = this.props;

        // if ((id) && (selected) && (confirm)) {
        //     if (window.confirm('Are you sure you want this seat??') === true) {
        //         window.alert('you choose this seat')
        //     } else {
        //         window.alert('You cancel the choose')
        //     }
        // }


        return (
            <div className="col-sm-2">
                <button className="btn btn-success" onClick={() => this.props.onClick()}>Confirm</button>
            </div>
        )
    }

}
Confirm.propTypes = {
    Confirmation: PropTypes.func.isRequired,
  };

export default Confirm;
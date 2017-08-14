import React, { Component } from 'react';
import PropTypes from 'prop-types';
import participant from './participant.png';

export default class Table extends Component {


  static propTypes = {
    active: PropTypes.bool.isRequired,
  };

  render () {
    return (
        <img src={participant} alt="" style={{
          width: '50px',
          filter: this.props.active ? 'invert()' : 'none'
        }}/>
    );
  }
}

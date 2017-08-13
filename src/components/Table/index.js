import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Table extends Component {

  render () {
    return (
      <div>
        <h2>Table</h2>
        <code>{JSON.stringify(this.props)}</code>
      </div>
    );
  }
}

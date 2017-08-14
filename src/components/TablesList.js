import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
import './TablesList.css';

export default class TablesList extends Component {

  static propTypes = {
    tables: PropTypes.array.isRequired,
    subscribeTables: PropTypes.func.isRequired,
  };

  static defaultProps = {
    tables: [],
  };

  componentDidMount () {
    this.props.subscribeTables();
  }

  render () {
    return (
      <div className="row">

        {this.props.tables.map((table) => <Table key={table.id} {...table} />)}
      </div>
    );
  }
}

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {range} from 'lodash/util';
import Participant from './Participant';
import './Table.css'

const MAX_PARTICIPANTS = 12;

export default class Table extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    participants: PropTypes.number.isRequired,
  };

  getParticipants() {
    return range(MAX_PARTICIPANTS)
      .map((index) => <Participant key={index} active={index < this.props.participants}/>);
  }

  render() {
    return (
      <div className="table">
        <p>{this.props.name}</p>
        <div className="participants">
          {this.getParticipants()}
        </div>
      </div>
    );
  }
}

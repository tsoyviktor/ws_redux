import service, { Fields, Types } from '../services/webSocketService';

const SERVER_ERROR_ACTION = 'SERVER_ERROR';
const LOADED_TABLES_ACTION = 'LOADED_TABLES_ACTION';
const FETCHING_TABLES_ACTION = 'FETCHING_TABLES';

export const onError = (err) => {
    return {
      type: SERVER_ERROR_ACTION,
      payload: err
    }
};

export const sendData = (data) => {
  service.send(data)
};

export const onResponse = (data) => {
  if (data[Fields.TYPE] === Types.TABLE_LIST) {
    return {
      type: LOADED_TABLES_ACTION,
      payload: data[Fields.TABLES],
    }
  }
  return {
    type: '',
    payload: '',
  }
};

export const subscribeTables = () => {
  service.subscribeTables();
  return {
    type: FETCHING_TABLES_ACTION,
    payload: ''
  }
};


export default (state = [], action) => {
  switch (action.type) {
    case LOADED_TABLES_ACTION:
      return action.payload;
    default:
      return state;
  }
}
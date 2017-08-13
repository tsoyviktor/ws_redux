import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tables from './tables';

export default combineReducers({
  routing: routerReducer,
  tables,
})

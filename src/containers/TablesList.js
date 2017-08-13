import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TablesList from '../components/TablesList';
import { subscribeTables } from '../modules/tables';

const mapDispatchToProps = (dispatch) => bindActionCreators({
  subscribeTables
}, dispatch);

const mapStateToProps = (state) => {
  return {
    tables: state.tables
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TablesList)
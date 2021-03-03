import { connect } from 'react-redux';
import Field from '../components/Tools/Field';
import { changeInputValue } from '../actions/field';

const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => {
    dispatch(changeInputValue(ownProps.name, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field); 

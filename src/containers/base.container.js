import { connect } from 'react-redux';
import component from '../components/base.component';

import { changeStep } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    nextStep: () => dispatch(changeStep())
});

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(component);

export default container;
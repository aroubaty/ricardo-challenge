import { connect } from 'react-redux';
import component from '../components/detail.component';

const mapStateToProps = (state) => ({
    trains: state.trains
});

const mapDispatchToProps = () => ({});

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(component);

export default container;
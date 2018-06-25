import { connect } from 'react-redux';
import component from '../components/map.component';

import { nodes, edges } from '../config';

const mapStateToProps = (state) => {
    const trains = state.trains;
    const updateNodes = nodes.map(n => ({ ...n, color: '#000' }));
 
    // change node color based on train
    trains.forEach((train) => {
        const trainsNodeIndex = updateNodes.findIndex(n => n.id === train.node);

        if (trainsNodeIndex !== -1) {
            updateNodes[trainsNodeIndex].color = train.color;
        }
    });

    return {
        nodes: updateNodes,
        edges
    };
};

const mapDispatchToProps = dispatch => ({
});

const container = connect(
    mapStateToProps,
    mapDispatchToProps
)(component);

export default container;
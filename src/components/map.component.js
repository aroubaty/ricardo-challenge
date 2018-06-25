import React from 'react';
import PropTypes from 'prop-types';
import Graph from 'react-graph-vis';

const mapComponent = props => {
    const options = {
        layout: {
            randomSeed: 12, // I have try manual to find the best looking chart 3
            improvedLayout: true,
            hierarchical: {
                enabled: false,
            }
        },
        interaction: {
            dragNodes: false,
            dragView: false,
            selectable: false,
            selectConnectedEdges: false,
            zoomView: false
        },
        physics: {
            enabled: false,
        },
        nodes: {
            color: {
                border: '#000',
                background: '#000',
            },
            font: {
                color: 'white',
                size: 25,
            },
        },
        edges: {
            color: {
                color: '#848484',
                inherit: false,
                opacity: 1.0
            },
            width: 4,
            arrows: {
                to: { enabled: false, scaleFactor: 1, type: 'bar' },
                middle: { enabled: false, scaleFactor: 1, type: 'bar' },
                from: { enabled: false, scaleFactor: 1, type: 'bar' }
            },
        },
        width: '700px',
        height: '700px'
    };

    return (
        <div style={{ width: '700px', margin: 'auto' }}>
            <Graph graph={{ nodes: props.nodes, edges: props.edges }} options={options} />
        </div>
    )
};

mapComponent.propTypes = {
    nodes: PropTypes.array.isRequired,
    edges: PropTypes.array.isRequired
};

export default mapComponent;
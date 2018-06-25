import React from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';

import Map from '../containers/map.container';
import Detail from '../containers/detail.container';

const baseComponent = (props) => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Ricardo challenge</h1>
            <button className="button buttonNext" onClick={props.nextStep} >Next Step</button>
        </header>
        <Detail />
        <Map />
    </div>
);

baseComponent.proptypes = {
    nextStep: PropTypes.func.isRequired,
};

export default baseComponent;

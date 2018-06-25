import React from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';


const baseComponent = (props) => (
    <div>
        <ul>
            {
                props.trains.map((train, i) => (
                    <li style={{ color: train.color }} key={i} >
                        {`${train.name} : ${train.passengers} ${(train.passengers > 1) ? 'passengers' : 'passenger'}`}
                    </li>
                ))
            }
        </ul>
    </div>
);

baseComponent.proptypes = {
    trains: PropTypes.array.isRequired,
};

export default baseComponent;

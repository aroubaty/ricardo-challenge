import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { initialTrains } from './config';

import { 
    UPDATE_TRAINS
} from './actions';

// REDUCER
const defaultState = {
    step: 0,
    trains: initialTrains
};

function reducer(state = defaultState, action) {
    switch (action.type) {
        case UPDATE_TRAINS:
            return {
                ...state,
                trains: action.trains,
                step: action.step
            };

        default:
            return state;
    }
}

// STORE
const store = createStore(
    reducer,
    applyMiddleware(
      thunkMiddleware
    )
  );
  
export default store;

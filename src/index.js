import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux';
import Base from './containers/base.container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Base />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

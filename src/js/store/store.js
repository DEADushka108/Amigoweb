import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './reducer';
import {redirect} from './redirect/redirect';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(redirect)
    )
);

export default store;

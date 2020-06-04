import { createStore
    // , applyMiddleware, compose 
} from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const INITIAL_STATE = {};

// const middleware = [thunk];

const store = createStore(
    rootReducer,
    INITIAL_STATE
    // compose(
    //     applyMiddleware(...middleware)
    // )
);

export default store;
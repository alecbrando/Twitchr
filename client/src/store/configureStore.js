import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    
});

const configureStore = () => {
    return createStore(
        reducers,
        null,
        composeEnhancers(applyMiddleware(thunk))
    )
}

export default configureStore;
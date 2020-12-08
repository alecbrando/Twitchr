import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import picReducer from '../store/reducers';
import commentReducer from '../store/reducers/commentReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import auth from './auth'
const rootReducer = combineReducers({
    auth,
    picReducer,
    commentReducer
});

const persistConfig = {
  key: 'root',
  storage,
}

let storeEnhancer;

if (process.env.NODE_ENV !== "production") {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  storeEnhancer = composeEnhancers(applyMiddleware(thunk));
} else {
  storeEnhancer = applyMiddleware(thunk);
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export default function configureStore(initialState) {
  return createStore(persistedReducer, initialState, storeEnhancer);
}
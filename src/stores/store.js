import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import {
  requestInterceptors,
  responseInterceptors
} from 'middleware/interceptors';
import rootReducer from './reducers';

// axios interceptors
requestInterceptors();
responseInterceptors();

export const history = createBrowserHistory({});

const initialState = {};
const enhancers = [];
const middleware = [
  thunk
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;

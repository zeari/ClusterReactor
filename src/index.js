import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'

const middleware = [ thunk ]
//if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
//}

const store = createStore(
  reducer,
  {allClusters: {clusters: []} },
  applyMiddleware(...middleware),
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
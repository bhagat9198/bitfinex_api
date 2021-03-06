import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from './store/reducer';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

const rootReducer = combineReducers({
  reducer: reducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import  {CssBaseline}  from '@mui/material'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import theme from "./theme.js"
import {Provider} from "react-redux"
import { createStore , applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Redux/Reducers/index.js';
import mySaga from './Redux/Sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </Provider>,
)

import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';

function renderApp() {
    const App = require('./App').default
    render( <App />, app )
}

renderApp();

module.hot.accept(renderApp);


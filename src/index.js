import React from 'react';
import ReactDom from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/style.css';
import App from './app/layout/App';

const rootEl = document.getElementById('root');

function render() {
  ReactDom.render(<App />, rootEl);
}

if (module.hot) {
  module.hot.accept('./app/layout/App', function () {
    setTimeout(render);
  });
}

render();

// route gula index.js e korbo
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import App from './App';
import {ProductProvider} from './context';
//product provider has all info. it should be placed on top of the architecture
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>,
  document.getElementById('root')
);


serviceWorker.unregister();

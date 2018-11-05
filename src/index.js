import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './configureStore';
import CartApp from './components/CartApp';

const store = configureStore();

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <CartApp/>
    </BrowserRouter>  
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import Produtos from './Produtos';
import Carrinho from './Carrinho';
import loja from './redux/loja';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={loja}>
    <div style={{display: 'inline-block'}}>
      <Produtos />
      <Carrinho />
    </div>
  </Provider>,
  document.getElementById('root') 
);
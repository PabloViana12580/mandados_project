import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../../reducers';
import './index.css'


const CartTotal = ({ onClick }) => (
  <div >
  <h2>
     {
        <button className= "enviarBTN" onClick={onClick}>Enviar Mandado!</button>
      }
  </h2>
  </div>
);

export default connect(
  state => ({
    total: selectors.getCartTotal(state),
  }),
  undefined,
)(CartTotal);

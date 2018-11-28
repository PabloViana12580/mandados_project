import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../../reducers';
import InventoryItem from '../InventoryItem';
import './index.css';

const InventoryList = ({ products = [] }) => (
  <div>
      <div className = "imagen"> </div>
        <div className ="hola">
        <ul>
          {
            products.length > 0
              ? products.map(({ id }) => <InventoryItem key={id} id={id} />)
              : <li>No existen productos en su carreta!</li>
          }
        </ul>
        </div>
  </div>
 
);

export default connect(
  state => ({
    products: selectors.getProducts(state),
  }),
  undefined,
)(InventoryList);

import React from 'react';
import { connect } from 'react-redux';
import './index.css'


const InventoryItem = ({
  name,
  qty,
  onClick,
}) => (
  <div> 
 
    {name}
    {' - '}
    {qty}
    {' '}
    {
        <button onClick={onClick}> Eliminar!</button>
    }
  
  </div>
  
);

export default connect(
  (state, { id }) => ({
    ...state.inventory.byId[id],
  })
)(InventoryItem);

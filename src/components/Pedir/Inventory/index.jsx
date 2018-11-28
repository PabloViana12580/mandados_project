import React from 'react';

import InventoryList from '../InventoryList';
import InventoryForm from '../InventoryForm';


const Inventory = () => (
  <div className="inventory">
   <InventoryForm />
    <InventoryList />
   
  </div>
);

export default Inventory;

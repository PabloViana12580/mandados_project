import uuid from 'uuid-v4';
import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../actions';
import './index.css'


class InventoryFormDummy extends React.Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <div className= "inputs">
           <div className="quisiera">
              <input
                type="text"
                placeholder="Quisiera..."
                ref={ node => { this.nameInput = node; } }
              />
           </div>
         
          <div className="cantidad">
              <input
                type="number"
                placeholder="Cantidad"
                ref={ node => { this.qtyInput = node; } }
              />
          </div>
          
        
              <button className = "button1"
                onClick={
                  () => {
                    onSubmit(
                      this.nameInput.value,
                      this.qtyInput.value,
                    );

                    this.nameInput.value = "";
                    this.qtyInput.value = "";
                    this.nameInput.focus();
                  }
                }
              >
              Agregar
              </button>
              
      </div>
    );
  }
};

export default connect(
  undefined,
  dispatch => ({
    onSubmit(name, qty) {
      dispatch(actions.addToInventory(uuid(), name, qty));
    }
  })
)(InventoryFormDummy);

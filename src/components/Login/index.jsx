import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import './index.css';

class form extends React.Component{
    render(){
     const {onSubmit} = this.props;
            <div>
    
            <input type="text" ref = {node => {this.title = node; }} />

            <input type="text" ref = {node => {this.content = node;} } />
        
            <button onClick={() => {
                onSubmit(
                this.title.value,
                this.content.value
                );
                this.title.value = "";
                this.content.value = "";
                }
            }> INGRESA </button>
        </div>
    }
}

export default connect(
    undefined,
    dispatch => ({
      onSubmit(title, body){
        dispatch(actions.addPost(uuid(), title, body, 0,[]));
      }
    }) 
   )(form);
import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import * as actions from '../../actions'
import './logic.css'

class login extends React.Component{
    render(){
    const {onSubmit} = this.props;
    return(
        
        
        <div className= "titulo">
         <h1>¡Que Manda!</h1>
        <div className = "boxLogin">
       
        <div className = "login">
            <div className = "textLogin">
            <br/>
            <p> Username </p>
            <input type="text" ref = {node => {this.title = node; }} />
            <br/>

            <p> Password</p>
            <input type="password" ref = {node => {this.content = node;} } />
            <br/>
            <br/>

            <nav>
            <Link to='/home'>
                <button onClick={
                () => {
                    onSubmit(
                        this.title.value,
                        this.content.value
                        );
                        this.title.value = "";
                        this.content.value = "";
                        }
                    }> INGRESAR</button>
            </Link>
            </nav>
            
            <div className = "registros">
                <nav><Link to='/registroC'>Registro de Conductores</Link></nav>
                <br/>
                <nav><Link to='/registro'>Registro</Link></nav>
                <br/>
                
            </div>

             </div>   
            
        </div>
        </div>
        </div>
    )

    }
}

export default connect(
    undefined,
    (dispatch) => ({
      onSubmit(title, body){
        console.log(title, body);   
        dispatch(actions.userLogin(title,body));
      }
    })
  )(login)

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import Modal from '../CustomComponents/Modal';
import './logic.css'

class login extends React.Component{
    render(){
    const {onSubmit} = this.props;
    return(
        <div className = "Wrapper">
            <Modal />
            <div className = "queManda">
            </div>
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
                        <button className="btnIngresar" onClick={
                        () => {
                            onSubmit(
                                this.title.value,
                                this.content.value
                                );
                                this.title.value = "";
                                this.content.value = "";
                                }
                            }>Ingresar</button>
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

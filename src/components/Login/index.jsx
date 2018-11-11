import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class login extends React.Component{
    render(){
    const {onSubmit} = this.props;
    return(
     
            <div className = "login">
            <p> User </p>
            <input type="text" ref = {node => {this.title = node; }} />
            <br/>

            <p> Password</p>
            <input type="text" ref = {node => {this.content = node;} } />
            <br/>
            <br/>

            <nav>
            <Link to='/registro'>
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
            
        </div>
    )

    }
}

export default connect(
    undefined,
    (dispatch) => ({
      onSubmit(title, body){
        console.log(title, body);   
      }
    })
  )(login);

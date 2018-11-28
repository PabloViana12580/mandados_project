import React, { Component }from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './index.css';

import { requestedApi } from "../../actions/mandaderos";

class ConductorList extends Component{

	componentDidMount(){
		this.props.requestedApi();
	}

	socio = (data) =>(
		<div className= "ConductorListItem">
			{console.log("esto es: "+ data)}
      <h3> {data.name} {data.last_name} </h3> 
      <img src= {"https://i.imgur.com/sohWhy9.jpg"} height={"120"} width={"90"}/>
      <div> {data.description}</div>
      <nav>
      <Link to='/home'>
          <button> Utilizar</button>
      </Link>
      </nav>         
    </div>
	)

	render() {
		const  { mandadero = [] } = this.props.data;
		return(
		    <div>
		     <h1>Que Manda</h1>
		    
			    <div className= "ConductorList">
			    {
			    	
			      mandadero.map(this.socio)
					}
		    	</div>
		    </div>	
		);
	}
}

const mapStateToProps = state => ({data: state});
const mapDispatchToProps = dispatch => 
	bindActionCreators(
		{requestedApi},
		dispatch,
	)

export default connect(mapStateToProps, mapDispatchToProps)(ConductorList);
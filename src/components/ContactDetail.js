import React from 'react';
import user from '../images/user.svg';
import {Link} from 'react-router-dom';
const ContactDeatils=(props)=>{
	const {name,email}=props.location.state.contact;
	return(
		<>
		<br/>
		<br/>
		<br/>
		<div className="main">
		<div className="ui card centered">
		<div className="image">
		<img src={user} alt="user"/>
		</div>
		<div className="content">
		<div className="header">{name}</div>
		<div className="description">{email}</div>
		</div>
		<div className="center-div">
		<Link to="/ContactManager/">
		<button style={{float:"center"}}className="ui button blue center">
		Back to Contact List</button>
		</Link>
		</div>
		</div>
		
		</div>
		</>
		  
		);
};

export default ContactDeatils;
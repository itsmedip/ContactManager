import React from 'react';
import user from '../images/user.svg';
import {Link} from 'react-router-dom';
const ContactCard=(props)=>{
	const {id,name,email}=props.contacts;
	return(

				<div className="item">
		   <img className="ui avatar images" src={user} alt="user" 
		   height={25} weight={25}/>
			<div className="content">
			<Link to={{pathname:`/ContactManager/contact/${id}`,state:{contact:props.contacts}}}>
			 <div className="header">{name}</div>
              <div>{email}</div>
              </Link>
			</div>
			<i className="trash alternate outline icon"
            style={{color:"red",marginTop:"7px"}}
            onClick={()=>props.clickHandler(id)}
			></i>
			</div>
		);
};

export default ContactCard;
import React from 'react';
import ContactCard from './ContactCard'; 
import {Link} from 'react-router-dom';
const ContactList=(props)=>{
	console.log(props.contacts);
	const deleteContactHandler=(id)=>{
    props.getContactId(id);
	};
	
	const renderContactList=props.contacts.map((contacts)=>{
		return(
			<ContactCard  contacts={contacts}
            clickHandler={deleteContactHandler}
            key={contacts.id}
			 />
			);
	});
   return (
   	<>
   	<br/>
   	<br/>
   	<br/>
   	<div className="main">
   	<h1>ContactList
   	<Link to="/ContactManager/add">
   	<button style={{float:"right"}} className="ui button blue right">Add Contact</button>
   	</Link>
   	</h1>
   	<div className="ui celled list">
    {renderContactList}
   	</div>
   	</div>
   	</>
   	);
};

export default ContactList


import './App.css';
import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {uuid} from 'uuidv4';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

function App() {
	const LOCAL_STORAGE_KEY="contacts";
	const [contacts,setContacts]=useState([]);
	const addContactHandeler=(contact)=>{
		console.log(contact);
		setContacts([...contacts,{id:uuid(),...contact}]);
	};
	const removeContactHandeler=(id)=>{
		const newContactList=contacts.filter((contact)=>{

	  return contact.id!==id;	
	});
	setContacts(newContactList);
};
	useEffect(()=>{
     const retriveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
     if(retriveContacts)
     setContacts(retriveContacts);
	},[]);
	useEffect(()=>{
     localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
	},[contacts]);
  return (
  <div className="ui container ">
        <Router>
        <Header/>
        <Switch>
        <Route exact path="/ContactManager/"
        render={(props)=>(
        <ContactList {...props} 
        contacts={contacts} getContactId={removeContactHandeler}/>)}/>
        <Route path='/ContactManager/add' 
        render={(props)=>(
        	<AddContact {...props}
            addContactHandeler={addContactHandeler}
        	/>
        	)}/>
        <Route path="/ContactManager/contact/:id" component={ContactDetail}/>
        </Switch>
        </Router>
  </div>
);
}

export default App;

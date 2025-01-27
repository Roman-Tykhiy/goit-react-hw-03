import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SerchBox from "./components/SerchBox/SerchBox";
import { useEffect, useState } from "react";

const App = () => {
  const myContact = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]
 
  const [value, setValue] = useState("");
  const serchValue = (e) => { 
    setValue(e.target.value.trim())
  };
  const filterContact = myContact.filter(e => {
    return e.name.toLowerCase().includes(value.toLowerCase())
  });

  return (
    
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SerchBox serchValue={serchValue} />
      <ContactList myContact={filterContact} />
    
    </>
  ) 
};

export default App;
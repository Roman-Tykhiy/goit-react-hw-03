import Contact from "../Contact/Contact"
const ContactList = ({myContact}) => {
    return (
         <ul>
            {myContact.map(item => (
                < Contact key = { item.id } { ...item } />
        ))}
      </ul>
   )
   
}

export default ContactList;
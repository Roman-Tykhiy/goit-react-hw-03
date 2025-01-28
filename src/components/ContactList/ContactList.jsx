import Contact from "../Contact/Contact"
const ContactList = ({myContact, handleDelete}) => {
    return (
         <ul>
            {myContact.map(item => (
                < Contact key={item.id} {...item} handleDelete={handleDelete} />
        ))}
      </ul>
   )
   
}

export default ContactList;
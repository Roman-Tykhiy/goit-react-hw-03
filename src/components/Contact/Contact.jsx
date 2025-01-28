

const Contact = ( { name, number, id, handleDelete}) => {
    return (        
        <li>
            <div>
                <p>{name}</p>
                <p>{number}</p>
            </div>
      <button onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
            );   

};
export default Contact;


const Contact = ( { name, number, id}) => {
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
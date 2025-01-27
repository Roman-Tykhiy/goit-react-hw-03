


const SerchBox = ({serchValue}) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input name="name" onChange={serchValue} />
    </>
    
  )

}
export default SerchBox;
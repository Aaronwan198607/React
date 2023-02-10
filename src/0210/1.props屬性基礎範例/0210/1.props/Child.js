function Child(props) {
  console.log(props)
  
  return (
    <>
      <h1>{props.text}</h1>
      <p>價格: {props.price}</p>
    </>
  )
}

export default Child

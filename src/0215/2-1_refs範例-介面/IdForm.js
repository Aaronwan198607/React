function IdForm() {
  return (
    <>
      <h1>IdForm</h1>
      <input type="text" id="myInput" />

      <button
        onClick={() => {
          document.getElementById('myInput').focus()
        }}
      ></button>
      <button
        onClick={() => {
          document.getElementById('myInput').blur()
        }}
      ></button>
      <button
        onClick={() => {
          console.log(document.getElementById('myInput').value)
        }}
      ></button>
    </>
  )
}
export default IdForm

import { useRef } from 'react'

function RefsFrom() {
  const inputRef = useRef(null)

  return (
    <>
      <h1>RefsFrom</h1>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
      ></button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      ></button>
    </>
  )
}
export default RefsFrom

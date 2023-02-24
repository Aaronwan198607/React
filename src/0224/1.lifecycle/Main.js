import { useState } from 'react'
import CC from './CC'

function Main() {
  const [show, setShow] = useState(true)

  return (
    <>
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? '移除' : '呈現'}
      </button>
      <hr />
      {show && <CC />}
    </>
  )
}

export default Main

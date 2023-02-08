import { useState } from 'react'

function Counter() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1
        onClick={() => {
          console.log('before total change ', total)
          const newTotal = total + 1
          setTotal(newTotal)
          console.log('after total change ', newTotal)
        }}
      >
        {total}
      </h1>
      <p>Message:{total > 5 && total}</p>
    </>
  )
}

export default Counter

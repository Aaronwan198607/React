import React from 'react'
function ChildA(props) {
  const { pData } = props
  return (
    <>
      <h1>ChildA</h1>
      <p>從Parent來的資料:{pData}</p>
    </>
  )
}
export default ChildA

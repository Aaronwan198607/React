import { useState } from "react"

import ChildA from './ChildA'
function Parent() {
  const [pData, setPData] = useState('pData')

  return (
    <>
      <ChildA pData={pData} />
    </>
  )
}
export default Parent

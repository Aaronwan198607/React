import {useState,useEffect} from 'react'

function ChildB(props) {
  const { setDataFromChild } = props
  const { cData, setCData } = useState('cb data')
    useEffect(() => {
      setDataFromChild(cData)
  },[cData])
    
    
  return (
    <div>ChildB</div>
  )
}

export default ChildB
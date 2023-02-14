import { useState } from 'react'

function AddForm(props) {
  // 文字輸入框用
  // local state
  const [inputValue, setInputValue] = useState('')

  const { handleAddTodo } = props

  return (
    <>
      <input
        type="text"
        autoFocus
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={(e) => {
          // 按下enter鍵
          if (e.key === 'Enter') {
            handleAddTodo(inputValue)
            setInputValue('')
          }
        }}
      />
    </>
  )
}

export default AddForm

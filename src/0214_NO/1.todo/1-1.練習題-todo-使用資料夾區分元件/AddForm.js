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
            const newTodo = {
              id: Number(new Date()),
              text: inputValue,
              completed: false,
            }
            //1 2 3
            handleAddTodo(newTodo)

            // 清空輸入框
            setInputValue('')
          }
        }}
      />
    </>
  )
}

export default AddForm

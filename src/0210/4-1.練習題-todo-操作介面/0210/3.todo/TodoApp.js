import { useState } from 'react'
import './TodoApp.css'

function TodoApp() {
  //文字輸入框 ↓
  const [inputVaule, setInputVaule] = useState('')

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '買牛奶',
      completed: false,
    },
    {
      id: 2,
      text: '學React',
      completed: true,
    },
  ])
  const toggleCompleted = (todos, id) => {
    return todos.map((v, i) => {
      // 用條件判斷是否為id=傳入id值，是的話回傳拷貝+修改過的新物件
      if (v.id === id) return { ...v, completed: !v.completed }
      // 不是的話，就拷貝後回傳新物件
      else return { ...v }
    })
  }
  const deleteTodo = (todos, id) => {
    return todos.filter((v, i) => {
      return v.id !== id
    })
  }
  // const addTodo = (todos, todo) => {
  //   return[todos,todos]
  // }

  return (
    <>
      <h1>待辨事項</h1>
      <input
        type="text"
        autoFocus
        value={inputVaule}
        onChange={(e) => {
          //按下Enter鍵的時候
          setInputVaule(e.target.value)
        }}
        onKeyDown={(e) => {
          // 按下enter鍵
          if (e.key === 'Enter') {
            const newTodo = { id: Number(new Date()), text: inputVaule }
            //1 2 3
            // eslint-disable-next-line no-undef
            setTodos(addTodo(todos, newTodo))

            // 清空輸入框
            setInputVaule('')
          }
        }}
      />
      <hr />
      <ul>
        {todos.map((v, i) => {
          return (
            <li key={v.id} className={v.completed ? 'completed' : 'active'}>
              <input
                type="checkbox"
                checked={v.completed}
                onChange={() => {
                  setTodos(toggleCompleted(todos, v.id))
                }}
              />
              {v.text}
              <button
                onClick={() => {
                  setTodos(deleteTodo(todos, v.id))
                }}
              >
                X
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp

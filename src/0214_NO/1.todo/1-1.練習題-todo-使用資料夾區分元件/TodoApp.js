import { useState } from 'react'
import './TodoApp.css'
import AddForm from './AddForm'
// 下面兩者同義(導入某資料夾 = 導入某資料夾的index.js)
// import TodoList from './TodoList/index'
import TodoList from './TodoList'

function TodoApp() {
  // 文字輸入框用
  // const [inputValue, setInputValue] = useState('')

  // 列表用
  // ex. todo = { id, text, completed }
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '買牛奶',
      completed: false,
    },
    {
      id: 2,
      text: '學react',
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

  const addTodo = (todos, todo) => {
    return [todo, ...todos]
  }

  // 專門要給AddForm用的
  const handleAddTodo = (newTodo) => {
    setTodos(addTodo(todos, newTodo))
  }

  return (
    <>
      <h1>待辨事項</h1>
      <AddForm handleAddTodo={handleAddTodo} />
      <hr />
      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        setTodos={setTodos}
        deleteTodo={deleteTodo}
      />
    </>
  )
}

export default TodoApp

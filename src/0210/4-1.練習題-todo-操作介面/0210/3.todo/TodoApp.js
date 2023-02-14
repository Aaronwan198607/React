import { useState } from 'react'
import TodoList from '../../../../0214/0214/1-1.練習題-todo-使用資料夾區分元件/TodoList'
import './TodoApp.css'
import AddForm from '../../../../0214/0214/1-1.練習題-todo-使用資料夾區分元件/AddForm'

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

  const [myFilter, setMyFilter] = useState('進行中的代辦')

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
  const createTodo = (text) => {
    return {
      id: Number(new Date()),
      text: text,
      completed: false,
    }
  }
  const handleAddTodo = (text) => {
    setTodos(addTodo(todos, createTodo(text)))
  }
  const handlToggleCompleted = (id) => {
    setTodos(toggleCompleted(todos, id))
  }
  const handleDeleteTodo = (id) => {
    setTodos(deleteTodo(todos, id))
  }

  return (
    <>
      <h1>待辨事項</h1>
      <AddFrom handleAddTodo={handleAddTodo} />
      <hr />
      <TodoList
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handlToggleCompleted={handlToggleCompleted}
      />
      <hr />
      <button className="filter-button-normal">所有</button>
      <button className="filter-button-active">進行中的代辦</button>
      <button>已完成</button>
    </>
  )
}
export default TodoApp

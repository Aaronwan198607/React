import { useState } from 'react'
import './TodoList/Todo.css'
import AddForm from './AddForm'

// 下面兩者同義(導入某資料夾 = 導入某資料夾的index.js)
// import TodoList from './TodoList/index'
import TodoList from '.'

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

  const filterOptions = ['所有', '進行中', '已完成']

  const [myFilter, setMyFilter] = useState('進行中')

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

  const getFilterTodos = (todos, type) => {
    if (type === '進行中') return todos.filter((v) => !v.completed)
    if (type === '已完成') return todos.filter((v) => v.completed)

    return todos
  }

  const createTodo = (text) => {
    return {
      id: Number(new Date()),
      text: text,
      completed: false,
      editing: false,
    }
  }
  // 專門要給AddForm用的
  const handleAddTodo = (text) => {
    setTodos(addTodo(todos, createTodo(text)))
  }
  const handleToggleCompleted = (id) => {
    setTodos(toggleCompleted(todos, id))
  }
  const handleDeleteTodo = (id) => {
    setTodos(deleteTodo(todos, id))
  }

  return (
    <hr>
      <h1>待辨事項</h1>
      <AddForm handleAddTodo={handleAddTodo} />
      <hr />
      <TodoList
        todos={getFilterTodos(todos, myFilter)}
        handleDeleteTodo={handleDeleteTodo}
        handleToggleCompleted={handleToggleCompleted}
      />
      <hr />
      {filterOptions.map((v, i) => {
        return (
          <button
            key={i}
            className={
              v === myFilter ? 'filter-button-active' : 'filter-button-normal'
            }
            nClick={() => {
              setMyFilter(v)
            }}
          >
            {v}
          </button>
        )
      })}
    </hr>
  )
}
export default TodoApp

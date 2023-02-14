import React from 'react'

function TodoItem(props) {
  const { id, completed, text, handleDeleteTodo, handleToggleCompleted } = props

  return (
    <li className={completed ? 'completed' : 'active'}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          handleToggleCompleted(id)
        }}
      />
      {text}
      <button
        onClick={() => {
          handleDeleteTodo(id)
        }}
      >
        X
      </button>
    </li>
  )
}

export default TodoItem

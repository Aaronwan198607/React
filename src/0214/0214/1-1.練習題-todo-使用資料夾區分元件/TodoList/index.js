import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
  const { todos, handlToggleCompleted, handleDeleteTodo } = props

  return (
    <>
      <ul>
        {todos.map((v, i) => {
          const { id, text, completed } = v

          return (
            <TodoItem
              key={id}
              id={id}
              completed={completed}
              text={text}
              handleDeleteTodo={handleDeleteTodo}
              handlToggleCompleted={handlToggleCompleted}
            />
          )
        })}
      </ul>
    </>
  )
}

export default TodoList

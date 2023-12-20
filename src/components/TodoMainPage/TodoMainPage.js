import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './TodoMainPage.module.css'
import TodoActions from '../TodosActions/TodosActions'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'

function TodoMainPage() {
  const [todos, setTodos] = useState([])
  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  const updateTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      })
    )
  }
  const resetTodosHandler = () => {
    setTodos([])
  }
  const deleteCompletedTodosHandler = () => {
    console.log('Я ловлю баг')
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className={styles.TodoMainPage}>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length > 0 && (
        <TodoActions
          completeTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        updateTodo={updateTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} todos`}</h2>
      )}
    </div>
  )
}

export default TodoMainPage

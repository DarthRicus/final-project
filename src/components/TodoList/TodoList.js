import Todo from '../Todo/Todo'
import styles from './TodoList.module.css'
function TodoList(props) {
  const { todos, deleteTodo, updateTodo } = props

  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  )
}

export default TodoList

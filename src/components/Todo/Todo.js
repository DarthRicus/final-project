import { RiTodoLine } from 'react-icons/ri'
import { IoTrashBin } from 'react-icons/io5'
import { FaCheck } from 'react-icons/fa'

import styles from './Todo.module.css'

function Todo(props) {
  const { todo, deleteTodo, updateTodo } = props
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoLine className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <IoTrashBin
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck
        className={styles.checkIcon}
        onClick={() => updateTodo(todo.id)}
      />
    </div>
  )
}

export default Todo

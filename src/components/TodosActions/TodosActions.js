import Button from '../UI/Button'
import { MdDelete } from 'react-icons/md'
import { FiRefreshCcw } from 'react-icons/fi'
import styles from './TodosActions.module.css'

function TodoActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <FiRefreshCcw />
      </Button>
      <Button title="Delete completed Todos" onClick={deleteCompletedTodos}>
        <MdDelete />
      </Button>
    </div>
  )
}
export default TodoActions

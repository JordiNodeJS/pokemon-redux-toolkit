import { useGetTodosQuery } from './store/apis/todosApi'

const TodoApp = () => {
  const { data: todos, isLoading } = useGetTodosQuery()
  console.log(todos)

  return (
    <>
      <h1>Todo - RTK Query </h1>
      {isLoading && <h4>Loading...</h4>}
      <ul>
        {todos?.map(todo => (
          <>
            <li key={todo.id}>
              {todo.id}.- {todo.completed ? '👍' : '⏳'} {todo.title}
            </li>
          </>
        ))}
      </ul>
      <button>Next TODO</button>
    </>
  )
}

export default TodoApp

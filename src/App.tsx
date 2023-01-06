import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todos';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string): void => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const deleteTodoHandler = (todoId: string): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId))
  }
  
  return (
    <div className='w-[40rem] m-auto'>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;

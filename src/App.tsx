import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todos';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string): void => {
    const newTodo = new Todo(todoText);
    setTodos((prevState) => prevState.concat(newTodo));
  };
  return (
    <div className='w-[40rem] m-auto'>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;

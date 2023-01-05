import Todos from './components/Todos';
import Todo from './models/todos';

function App() {
  const todos = [
    new Todo('Learn Advanced React'),
    new Todo('Learn Advanced Typescript'),
  ];
  return <Todos items={todos} />;
}

export default App;

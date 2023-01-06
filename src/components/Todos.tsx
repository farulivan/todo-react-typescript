import Todo from '../models/todos'
import TodoItem from './TodoItem';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className='my-8 mx-auto p-0 w-[40rem]'>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text}/>
      ))}
    </ul>
  );
};

export default Todos;

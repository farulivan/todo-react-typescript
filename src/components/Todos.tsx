import { FC } from 'react';

const Todos: FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;

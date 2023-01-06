const TodoItem: React.FC<{text: string}> = (props) => {
  return (
    <li className='my-4 mx-0 shadow-md rounded-md text-sm p-3 bg-zinc-300 font-semibold'>{props.text}</li>
  )
}

export default TodoItem
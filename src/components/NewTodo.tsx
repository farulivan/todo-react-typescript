import { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      //throw error
      return;
    }

    props.onAddTodo(enteredText);
  };

  return (
    <form className="w-[40rem] my-8 mx-auto" onSubmit={submitHandler}>
      <label className="block font-bold mb-2 text-lg" htmlFor="text">
        Write your todo list
      </label>
      <input
        className="block w-full text-lg rounded-t-sm bg-zinc-300 border-b-sky-700 border-b-2 mb-2 font-semibold p-2"
        type="text"
        id="text"
        ref={todoTextInputRef}
      />
      <button className='bg-sky-600 border-2 border-sky-600 text-sky-50 font-semibold text-sm py-2 px-6 rounded-md cursor-pointer hover:bg-sky-900 hover:border-sky-900 active:bg-sky-900 active:border-sky-900'>Add Todo</button>
    </form>
  );
};

export default NewTodo;

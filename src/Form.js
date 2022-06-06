import { useState } from "react";

const Form = ({setListTodo, listTodo}) => {
  const [value, setValue] = useState('')
  const local = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : []
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
    setListTodo([...listTodo, value])
    localStorage.setItem('todo', JSON.stringify([...local, value]))
    setValue('')
  }
    return (
      <form className="form" >
        <input placeholder="Enter task ..." value={value} onChange={({target}) => setValue(target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    );
  };
  
  export default Form;
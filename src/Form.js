import { useState } from "react";

const Form = ({setListTodo, listTodo}) => {
  const [value, setValue] = useState({
    todo: '',
    status: false
  })
  const local = localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : []
  const handleSubmit = (e) => {
    e.preventDefault()
    setListTodo([...listTodo, value])
    localStorage.setItem('todo', JSON.stringify([...local, value]))
    setValue({
      todo: '',
      status: false
    })
  }
    return (
      <form className="form" >
        <input placeholder="Enter task ..." value={value.todo} onChange={({target}) => setValue({...value, todo: target.value})}/>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    );
  };
  
  export default Form;
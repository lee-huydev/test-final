import { useState, useRef, useEffect } from 'react';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';

const TodoList = ({ elem, number, setNumber, listTodo, setListTodo }) => {
   const [done, setDone] = useState(false);
   const refClick = useRef(null);
   const handleEvent = () => {
      const data = listTodo.filter(e => e.todo !== elem.todo)
      if(elem.status === false) {
         setListTodo([...data, {todo: elem.todo, status: true}])
      } else {
         setListTodo([...data, {todo: elem.todo, status: false}])
      }
   };
   return (
      <div
         className={elem.status ? "todo-item-container done" : "todo-item-container"}
         ref={refClick}
         onClick={() => handleEvent()}
      >
         <FaRegCircle className="item-done-button" color="#9a9a9a" />
         <div className="item-title">{elem.todo}</div>
      </div>
   );
};

export default TodoList;

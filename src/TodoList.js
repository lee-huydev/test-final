import { useState, useRef, useEffect } from 'react';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';

const TodoList = ({
   elem,
   number,
   setNumber,
   setTaskNot,
   listTodo,
   taskNot,
}) => {
   const [done, setDone] = useState(false);
   const refClick = useRef(null);
   const handleEvent = () => {
      setDone(!done);
      done ? setNumber(number + 1) : setNumber(number - 1);
   };
   useEffect(() => {
      if (done) {
         refClick.current.style.textDecoration = 'line-through'
         if (!taskNot.includes(elem)) {
            setTaskNot([...taskNot, elem]);
         }
      } else {
         refClick.current.style.textDecoration = 'none'
      }
   }, [done]);
   return (
      <div className="todo-item-container" ref={refClick} onClick={handleEvent}>
         <FaRegCircle className="item-done-button" color="#9a9a9a" />
         <div className="item-title">{elem}</div>
      </div>
   );
};

export default TodoList;

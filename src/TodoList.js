
import { FaRegCircle } from 'react-icons/fa';

const TodoList = ({ elem, listTodo, setListTodo }) => {
   const timeCreated = elem.date.split('/')
   const timeExpire = new Date()
   timeExpire.setDate(timeExpire.getDate() + 7)
   const handleEvent = () => {
      const data = listTodo.filter(e => e.todo !== elem.todo)
      if(elem.status === false) {
         setListTodo([...data, {...elem, status: true}])
      } else {
         setListTodo([...data, {...elem, status: false}])
      }
   };
   return (
      <div
         className={elem.status ? "todo-item-container done" : "todo-item-container"}
         onClick={() => handleEvent()}
      >
         <FaRegCircle className="item-done-button" color="#9a9a9a" />
         <div className="item-title">{elem.todo}</div>
         <div className='time-due'>{timeExpire.getDate() - Number(timeCreated[0])} day</div>
      </div>
   );
};

export default TodoList;

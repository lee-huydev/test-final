import './styles.css';
import TodoList from './TodoList';
import TodoListHeader from './TodoListHeader';
import Form from './Form';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Translation } from 'react-i18next'
import ChangeLang from './components/ChangLang'
export default function App() {
   return (
      <div className="App">
        <Translation>{t => <ChangeLang t={t} />}</Translation>
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </div>
   );
}

const Home = () => {
   const [render, setRender] = useState(null);
   const [number, setNumber] = useState(null);
   const [listTodo, setListTodo] = useState([]);
   const [taskNot, setTaskNot] = useState([]);
   const [checked, setChecked] = useState(false);
    const local = JSON.parse(localStorage.getItem('todo'))
    useEffect(() => {
      local && setListTodo(local)
    }, [])
   useEffect(() => {
      setNumber(listTodo.length);
      setRender(listTodo)
   }, [listTodo]);
   useEffect(() => {
      if (checked) {
         setRender(listTodo.filter(e => !taskNot.includes(e)));
         setNumber(taskNot.length)
      } else {
         setRender(listTodo);
         setTaskNot([])
         setNumber(listTodo.length)
      }
   }, [checked]);
   return (
      <div className="App">
         <div className="container">
            <TodoListHeader number={number} setChecked={setChecked} />
            <div className="todo-list-container">
               {render && render.map((elem, index) => (
                     <TodoList
                        elem={elem}
                        number={number}
                        setNumber={setNumber}
                        setTaskNot={setTaskNot}
                        listTodo={listTodo}
                        taskNot={taskNot}
                        key={index}
                     />
                  ))}
            </div>
            <Form listTodo={listTodo} setListTodo={setListTodo} />
         </div>
         <Footer />
      </div>
   );
};

import './styles.css';
import TodoList from './TodoList';
import TodoListHeader from './TodoListHeader';
import Form from './Form';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Translation } from 'react-i18next';
import ChangeLang from './components/ChangLang';
export default function App() {
   return (
      <div className="App">
         <Translation>{(t) => <ChangeLang t={t} />}</Translation>
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </div>
   );
}

const Home = () => {
   const [render, setRender] = useState(null);
   const [number, setNumber] = useState(0);
   const [listTodo, setListTodo] = useState([]);
   const [checked, setChecked] = useState(false);
   const local = JSON.parse(localStorage.getItem('todo'));
   useEffect(() => {
      local && setListTodo(local);
   }, []);
   useEffect(() => {
      setRender(listTodo);
      let number = 0;
      listTodo.forEach((e) => {
         !e.status && number++;
      });
      setNumber(number);
   }, [listTodo]);
   useEffect(() => {
      checked
         ? setRender(listTodo.filter((e) => e.status === false))
         : setRender(listTodo);
   }, [checked]);
   return (
      <div className="App">
         <div className="container">
            <TodoListHeader number={number} setChecked={setChecked} />
            <div className="todo-list-container">
               {render &&
                  render.map((elem, index) => (
                     <TodoList
                        elem={elem}
                        number={number}
                        setNumber={setNumber}
                        listTodo={listTodo}
                        setListTodo={setListTodo}
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

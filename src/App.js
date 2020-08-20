import React, {useEffect, useState} from 'react';
import "./tailwind.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {

    const [todos, setTodos] = useState([])

    useEffect(() => {

        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

        if(storageTodos) {
            setTodos(storageTodos);
        }

    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos])

    function addTodo(todo) {
        setTodos([todo, ...todos]);
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function toggleComplete(id) {
        setTodos(
            todos.map(todo => {
                if(todo.id === id) {
                   return {
                       ...todo,
                       completed: !todo.completed
                   }
                }
                return todo;
            })
        )
    }

  return (
    <div className="m-auto w-2/3 shadow p-3 mt-16">
        <h1 className="text-2xl font-bold">React Todo</h1>
        <TodoForm addTodo={addTodo}/>
        <TodoList removeTodo={removeTodo} toggleComplete={toggleComplete} todos={todos}/>

    </div>
  );
}

export default App;

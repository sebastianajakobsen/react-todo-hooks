import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function TodoForm({addTodo}) {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false,
    });

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo, id: uuidv4()});
            setTodo({...todo, task: ""})
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex my-2">
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="New task..."
                type="text"
                onChange={handleTaskInputChange}
                name="task"
                value={todo.task}/>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white ml-2 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">Submit
            </button>
        </form>
    );
}

export default TodoForm;
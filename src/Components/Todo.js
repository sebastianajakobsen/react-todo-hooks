import React from 'react';

function Todo({todo, toggleComplete, removeTodo}) {
    
    function handleCheckboxClick() {
        toggleComplete(todo.id)
    }

    function handleRemoveTodo() {
        removeTodo(todo.id)
    }
    
    return (
        <div className="flex items-center">
            <input defaultChecked={todo.completed} onClick={handleCheckboxClick} type="checkbox"/>
            <p className="ml-2" style={{textDecoration:todo.completed ? "line-through": null}}>{todo.task}</p>
            <button onClick={handleRemoveTodo} className="ml-2 font-bold text-red-600">x</button>
        </div>
    );
}

export default Todo;
import React from 'react';
import Todo from "./Todo";

function TodoList({todos, toggleComplete, removeTodo}) {
    return (
        <ul>
            {
                todos.map(todo =>  (
                        <Todo removeTodo={removeTodo} toggleComplete={toggleComplete} key={todo.id} todo={todo}/>
                    )
                )
            }
        </ul>
    );
}

export default TodoList;
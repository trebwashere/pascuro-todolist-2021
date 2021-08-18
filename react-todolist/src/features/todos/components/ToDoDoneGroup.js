import React from 'react';
import { doneSelector } from '../reducers/todoSlice';
import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem'

function ToDoGroup() {
    const todosDone = useSelector(doneSelector);
    return(
        <div>
            {
                todosDone.map((todo) => (
                    <ToDoItem key={todo.id} toDoId={todo.id}/>
                ))
            }
            <br/>
        </div>
    );
}

export default ToDoGroup;
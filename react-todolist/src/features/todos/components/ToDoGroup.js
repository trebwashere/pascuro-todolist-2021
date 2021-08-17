import React from 'react';
import ToDoItem from './ToDoItem';
import { useSelector } from 'react-redux';
import { selectToDoIds } from '../reducers/todoSlice';

function ToDoGroup() {
    const todos = useSelector(selectToDoIds);
    return(
        <div>
            {
                todos.map((id) => (
                    <ToDoItem key={id} toDoId={id}/>
                ))
            }
            <br/>
        </div>
    );
}

export default ToDoGroup;
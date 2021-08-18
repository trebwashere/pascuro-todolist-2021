import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToDoById, RemoveToDoFromState,ToggleToDoFromState } from '../reducers/todoSlice';
import { updateToDo, deleteToDo } from '../../apis/todos'
import { Button } from 'antd';


function ToDoItem(props) {
    
    const dispatch = useDispatch();
    const todo = useSelector((state) => selectToDoById(state, props.toDoId))
    var todoItemClass = todo.done? 'todo-item-done' : 'todo-item';

    function RemoveToDo(e) {
        deleteToDo(todo.id)
        .then((response) => {
            dispatch(RemoveToDoFromState(response.data))
        })
        e.stopPropagation()
    }

    function ToggleToDo() {
        updateToDo(todo.id, !todo.done)
        .then((response) => {
            dispatch(ToggleToDoFromState(response.data))
        })
    }

    return (
        <div class="todo-div" onClick={ToggleToDo}>
            <span className={todoItemClass}>{todo.text}</span><Button type="danger" onClick={RemoveToDo}>X</Button>
        </div>
    );
}

export default ToDoItem;
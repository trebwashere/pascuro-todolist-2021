import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToDoById, RemoveToDoFromState,ToggleToDoFromState } from '../reducers/todoSlice';


function ToDoItem(props) {
    
    const dispatch = useDispatch();
    const todo = useSelector((state) => selectToDoById(state, props.toDoId))
    var todoItemClass = todo.isDone? 'todo-item-done' : 'todo-item';

    function RemoveToDo(e) {
        dispatch(RemoveToDoFromState(props.toDoId))
        e.stopPropagation()
    }

    function ToggleToDo(e) {
        dispatch(ToggleToDoFromState(props.toDoId))
        e.stopPropagation()
    }

    return (
        <div class="todo-div" onClick={ToggleToDo}>
            <span className={todoItemClass} onClick={ToggleToDo}>{todo.text}</span><button onClick={RemoveToDo}>X</button>
        </div>
    );
}

export default ToDoItem;
import React, { useEffect } from 'react';
import ToDoItem from './ToDoItem';
import { useSelector, useDispatch} from 'react-redux';
import { AddAllToDoFromState, selectToDoIds } from '../reducers/todoSlice';
import { getToDos } from '../../apis/todos';

function ToDoGroup() {
    const dispatch = useDispatch();

    useEffect(() => {
        getToDos().then((response) => {
            dispatch(AddAllToDoFromState(response.data))
        })
    }, [])

    const todos = useSelector(selectToDoIds)

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
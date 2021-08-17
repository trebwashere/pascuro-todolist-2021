import React from 'react'
import ToDoGroup from './ToDoGroup'
import ToDoForm from './ToDoForm'

function ToDoList() {
    return (
        <div>
            <h1>Todo List</h1>
            <ToDoGroup/>
            <ToDoForm/>
        </div>
    )
}

export default ToDoList

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddToDoFromState } from '../reducers/todoSlice'

function ToDoForm() {
    const[text, setText] = useState('');
    const dispatch = useDispatch()

    function handleTextChange(e) {
        setText(e.target.value)
        console.log(text)
    }

    function AddToDo() {
        dispatch(AddToDoFromState(text))
    }
    return (
        <div>
            <input type="text" placeholder="Input new Todo..." value={text} onChange={handleTextChange}/>
            <button onClick={AddToDo}>Add</button>
        </div>
    )
}

export default ToDoForm

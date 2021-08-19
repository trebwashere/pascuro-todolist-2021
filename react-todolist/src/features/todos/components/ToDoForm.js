import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddToDoFromState } from '../reducers/todoSlice'
import { addToDos } from '../../apis/todos'
import { Button,Input } from 'antd'

function ToDoForm() {
    const[text, setText] = useState('');
    const dispatch = useDispatch()

    function handleTextChange(e) {
        setText(e.target.value)
    }

    function AddToDo() {
        let todoToAdd = {text: text, done: false}
        addToDos(todoToAdd).then((response) => {
            dispatch(AddToDoFromState(response.data))
        }).catch((response) => console.log(response))
        setText('')
    }
    return (
        <div>
            <div className="textBox">
                <Input.TextArea size="large" placeholder="Input new Todo..." value={text} onChange={handleTextChange} onPressEnter={AddToDo}/>
            </div><br/>
            <Button type="primary" onClick={AddToDo}>Add ToDo!</Button>
        </div>
    )
}

export default ToDoForm

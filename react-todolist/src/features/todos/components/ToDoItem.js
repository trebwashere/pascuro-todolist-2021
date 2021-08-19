import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToDoById, RemoveToDoFromState,ToggleToDoFromState } from '../reducers/todoSlice';
import { updateToDo, deleteToDo } from '../../apis/todos'
import { Input, Modal, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';


function ToDoItem(props) {

    const dispatch = useDispatch();
    const todo = useSelector((state) => selectToDoById(state, props.toDoId))
    const [modalText, setModalText] = useState(todo.text)
    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setModalText(todo.text)
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };



    var todoItemClass = todo.done? 'todo-item-done' : 'todo-item';
    var editButtonClass = todo.done? 'edit-button-done' : 'edit-button';

    function RemoveToDo(e) {
        deleteToDo(todo.id)
        .then((response) => {
            dispatch(RemoveToDoFromState(response.data))
        })
        e.stopPropagation()
    }

    function ToggleToDo() {
        updateToDo(todo.id, {done: !todo.done})
        .then((response) => {
            dispatch(ToggleToDoFromState(response.data))
        })
    }

    function ModifyToDo() {
        if (modalText !== '') {
            updateToDo(todo.id, {text: modalText})
            .then((response) => {
                dispatch(ToggleToDoFromState(response.data))
            })
            setIsModalVisible(false);
        } else {
            handleCancel()
        }

    }

    function HandleModify(e) {
        setModalText(e.target.value)
    } 

    return (
        <div className="todo-div">
            <span className={todoItemClass} onClick={ToggleToDo}>{todo.text}</span><Button type="danger" onClick={RemoveToDo}>X</Button>
            <Button className={editButtonClass} icon={<EditOutlined />} type="primary" onClick={showModal}></Button>
      <Modal title="Edit to-do" visible={isModalVisible} onOk={ModifyToDo} onCancel={handleCancel}>
        <Input value={modalText} onChange={HandleModify}></Input>
      </Modal>
        </div>
    );
}

export default ToDoItem;
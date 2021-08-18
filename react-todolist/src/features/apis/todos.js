import api from './api'

export const getToDos = () => {
    return api.get('/todos')
}

export const addToDos = (text) => {
    return api.post('/todos', {text})
}

export const updateToDo = (id,done) => {
    return api.put(`/todos/${id}`, {done})
}

export const deleteToDo = (id) => {
    return api.delete(`/todos/${id}`)
}
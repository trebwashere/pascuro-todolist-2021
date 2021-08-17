import { configureStore } from "@reduxjs/toolkit";
import todosReducer from '../features/todos/reducers/todoSlice';

const store = configureStore({
    reducer: {todoList: todosReducer}
});

export default store;
import { createSlice,createEntityAdapter} from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { v4 as uuid } from 'uuid';

const toDoAdapter = createEntityAdapter();
const initialState = toDoAdapter.getInitialState({
    ids: [],
    entities: {},
})

const toDoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        AddToDoFromState(state, action) {
            toDoAdapter.addOne(state, {
                id: action.payload.id,
                text: action.payload.text,
                done: action.payload.done
            })
        },
        AddAllToDoFromState(state, action) {
            toDoAdapter.addMany(state, action.payload)
        },
        ToggleToDoFromState(state, action) {
            toDoAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload
            })
        },
        RemoveToDoFromState(state, action) {
            toDoAdapter.removeOne(state, action.payload.id)
        },
    }
});

export const {AddToDoFromState,AddAllToDoFromState,ToggleToDoFromState,RemoveToDoFromState} = toDoSlice.actions;
export const {selectIds: selectToDoIds, selectById: selectToDoById, selectAll: selectAllToDos} = toDoAdapter.getSelectors((state) => state.todoList);
export const doneSelector = createSelector([selectAllToDos], (todos) => todos.filter(todo => todo.done));
export default toDoSlice.reducer;
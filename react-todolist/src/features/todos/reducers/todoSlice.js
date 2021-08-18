import { createSlice,createEntityAdapter} from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { v4 as uuid } from 'uuid';

const toDoAdapter = createEntityAdapter();
const initialState = toDoAdapter.getInitialState({
    ids: [1,2],
    entities: {
        1: {
            id: 1,
            text: 'test to do',
            done: false,
        },
        2: {
            id: 2,
            text: 'Hello react',
            done: false,
        }
    }
})

const toDoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        AddToDoFromState(state, action) {
            toDoAdapter.addOne(state, action.payload)
        },
        AddAllToDoFromState(state, action) {
            toDoAdapter.addMany(state, action.payload)
        },
        ToggleToDoFromState(state, action) {
            console.log(action)
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
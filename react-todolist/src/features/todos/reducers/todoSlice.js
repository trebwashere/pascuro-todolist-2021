import { createSlice,createEntityAdapter} from "@reduxjs/toolkit";

const toDoAdapter = createEntityAdapter();
const initialState = toDoAdapter.getInitialState({
    ids: [1,2],
    entities: {
        1: {
            id: 1,
            text: 'test to do',
            isDone: false,
        },
        2: {
            id: 2,
            text: 'Hello react',
            isDone: false,
        }
    }
})

const toDoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        AddToDoFromState(state, action) {
            toDoAdapter.addOne(state, {
                id: state.ids.length+1,
                text: action.payload,
                isDone: false
            })
        },
        ToggleToDoFromState(state, action) {
            const todo = state.entities[action.payload]
            todo.isDone = !todo.isDone
        },
        RemoveToDoFromState(state, action) {
            toDoAdapter.removeOne(state, action.payload)
        },
    }
});

export const {AddToDoFromState,ToggleToDoFromState,RemoveToDoFromState} = toDoSlice.actions;
export const {selectIds: selectToDoIds, selectById: selectToDoById} = toDoAdapter.getSelectors((state) => state.todoList);
export default toDoSlice.reducer;
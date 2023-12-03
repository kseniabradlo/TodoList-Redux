import {createSlice} from "@reduxjs/toolkit";

let firstArr = []
if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', JSON.stringify(firstArr));
}
const initState = {
    tasks:JSON.parse(localStorage.getItem('tasks'))
}


export const taskSlice = createSlice({
    name: "taskValue",
    initialState:initState,
    reducers:{
        addTask:(state,action)=>{
               state.tasks = [...state.tasks, {
                   title:action.payload,
                   status:false,
                   checked:false
                }]
            localStorage.setItem('tasks', JSON.stringify(state.tasks))

        },
        removeTask:(state,action)=>{
            const storedTodos = JSON.parse(localStorage.getItem('tasks'))
            // const removeTodos - wse taski, kromie udalennych
            const removeTodos = storedTodos.filter(item=>{
                if(item.title != action.payload){
                    return true;
                }
                return false
                // jesli title taska, po kotoromu kliknuli x(UDALIT) sowpadaet s taskom w localstorage(storedtodos), to return false i on nie popadet w removeTodos.
            })
            localStorage.setItem('tasks', JSON.stringify(removeTodos))
        },
        updateStatus:(state, action) => {
            state.tasks = action.payload;
        },
    }

})

export const {addTask,removeTask,updateStatus} = taskSlice.actions;
export default taskSlice.reducer;

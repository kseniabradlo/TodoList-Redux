import {useSelector,useDispatch} from "react-redux";
import {addTask} from "../store/taskSlice";
import {useState} from "react";
import Task from './Task';

function Main(){

    let allTasks = useSelector((state)=>state.taskValue.tasks)

    const [inputVal,setInputVal]=useState(' ');
    function takeInputValHandler(e){
        setInputVal(e.currentTarget.value)
    }

    let dispatchMain= useDispatch();


    function addTaskHandler(){
        dispatchMain(addTask(inputVal))
        setInputVal(' ');
    }

    return(
        <div>
            <h2>Note your tasks</h2>

            <input type="text" value = {inputVal} onChange={takeInputValHandler}/>
            <button onClick={addTaskHandler}>add task</button>

            {
                allTasks.map((el) => <Task {...el}/>)
            }
        </div>
    )
}

export default Main;
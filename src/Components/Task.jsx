import './Task.css';
import {useDispatch} from "react-redux";
import {removeTask,updateStatus} from "../store/taskSlice";
import {useState} from "react";

function Task({title,status,checked}){
    let dispatchTask = useDispatch()

    const [visible,setVisible]=useState(true);
    function deleteTaskHandler(){
        setVisible(prev=>!prev)
        dispatchTask(removeTask(title))
    }

    // const[checked, setChecked]=useState(status)

        const [checkedStatus, setCheckedStatus] = useState(checked);
        const classes = ['todo'];
        const dispatch = useDispatch();

        if (checkedStatus) {
            classes.push('status')
        }

    function updateStatusHandler(e){
            setCheckedStatus(!checkedStatus);
            const storedTodos = JSON.parse(localStorage.getItem('tasks'));
            storedTodos.map((el)=>{
                if(el.title === title){
                    el.checked = !checkedStatus;
                }
                return true
            });
            localStorage.setItem('tasks',JSON.stringify(storedTodos));
            let tasksFromLocal = JSON.parse(localStorage.getItem('tasks'));
            dispatchTask(updateStatus(tasksFromLocal));
        }



    return(
        <>
        {visible && <div className='one-task'>
            <input onChange={updateStatusHandler} type="checkbox"/>
            <p>{title}</p>
            <p onClick={deleteTaskHandler}>delete</p>
        </div>}
        </>
    )
}

export default Task;
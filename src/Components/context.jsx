import { createContext, useReducer } from "react";
import { useState } from "react";
import { useContext } from "react";
const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);
export const ContextApp = () => {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
   /*   function handleAddTask(text) {
        dispatch({
            type: 'added',
            text: text,
            id: nextId++,

        })
    }*/
    /*  function handleChangeTask(task) {
        dispatch({
            type: 'changed',
            task: task,

        })
    }*/
   /*   function handleDeleteTask(taskId) {
        dispatch({
            type: 'deleted',
            id: taskId
        })
    }*/
    return (
        <>
            <TasksContext.Provider value={tasks}>
                <TasksDispatchContext.Provider value={dispatch}>
                    <h1>editer</h1>
                    <AddTasker />
                    <TaskLister />
                </TasksDispatchContext.Provider>
            </TasksContext.Provider>
        </>
    )
}
function AddTasker() {
const [text1,setText1]=useState('');
const dispatch=useContext(TasksDispatchContext)
return(
    <>
    <input value={text1} onChange={(e)=>setText1(e.target.value)}/>
    <button onClick={()=>dispatch(
        {
            type:'added',
            id:nextId++,
            text:text1
        }
    )}>AddTask</button>
    </>
)
};
function TaskLister() {
const tasks=useContext(TasksContext);
return(
    <>
    <ul>
    {tasks.map(task=><li key={task.id}><Task task={task} /></li>)}
    </ul>
    </>
)
}
function Task({task}){
    const dispatch=useContext(TasksDispatchContext);
    const [edit,setEdit]=useState(false);
    return (
        <>
        <input type='checkbox' value={task.checked} onChange={(e)=>dispatch({
            type:'changed',
            task:{
                ...task,
                done:e.target.checked
            }
        })}/>
        {edit? 
        <><input onChange={(e)=>dispatch({
            type:'changed',
            task:{
                ...task,
            text:e.target.value}
        })} value={task.text}/>
                <button onClick={()=>setEdit(false)}>Save</button>

        </>
        :
        <>
        {task.text}
        <button onClick={()=>setEdit(true)}>edit</button>
        </>}
        <button onClick={(e)=>{dispatch({
            type:'deleted',
            id: task.id
        })}}>Delete</button>
        </>
    )
}

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': return [
            ...tasks,
            {
                id: action.id,
                text: action.text,
                done: false
            }
        ]
        case 'changed': {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            })
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id)
        }
        default: {
            throw Error('unkwon action' + action.type)
        }
    }
}




let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];

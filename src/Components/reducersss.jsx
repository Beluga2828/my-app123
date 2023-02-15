import { useReducer, useState } from "react";



export const ReducerExample=()=>{
const [tasks,dispatch]=useReducer(taskReduce,initialTasks);

function handleChange(task){
dispatch({
    type: 'changed',
    task: task
})
};

function handleAddtask(text){
dispatch({
    type: 'added',
    text: text,
    id: oneid++
})
};

function handleDelete(taskId){
dispatch({
    type: 'deleted',
    id: taskId
})
};

return(
    <>
     <h1>Todo App</h1>
     <AddTask addOnTask={handleAddtask}/>
     <TaskList tasks={tasks} onDeleteTask={handleDelete} onChangeTask={handleChange} />
    </>
)

}

function taskReduce(tasks,action){
switch (action.type){
    case 'added':{
        return [
            ...tasks,
            {
             id: action.id,
             text: action.text,
             done: false
            }
        ];
    }
   case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted':{
        return tasks.filter(t=>t.id!==action.id)
    }
    default: {
        throw Error('UNKNOWN ACTION:' + action.type)
    }
}
}

function AddTask({addOnTask}){
const [text,setText]=useState('');

return(
    <>
    <input type='text' onChange={(e) => setText(e.target.value)} value={text} />
    <button onClick={()=>addOnTask(text)}>AddTask</button>
    </>
)
}

function TaskList({tasks,onChangeTask, onDeleteTask}){
return(
    <>
    <ul>
        {tasks.map(task=><li key={task.id}><Task task={task} onChange={onChangeTask} onDelete={onDeleteTask}/></li>)}
    </ul>
    </>
)
}
function Task({task, onChange, onDelete}){
const [edit,setEdit]=useState(false);
return(
    <>
    <input type='checkbox' onChange={(e)=>onChange({...task,done:e.target.checked})} checked={task.done} />
    {edit? <> <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }} /><button onClick={(e)=>setEdit(false)}>save</button></>: 
    <>{task.text}<button onClick={()=>setEdit(true)}>Edit</button></>}
    <button onClick={(e)=>onDelete(task.id)} >Delete</button>
    </>
)
}
 let oneid=3;
const initialTasks = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
    {id: 1, text: 'Watch a puppet show', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
  ];
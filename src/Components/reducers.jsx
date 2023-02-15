import { useState } from "react";

export const Reduceer=()=>{
const[counters,setCounters]=useState(initialCountra);
const [name,setName]=useState('');
const [add,setAdd]=useState(0);
function handleClick(){
 setCounters([
    ...counters,
    {
        id:nextIder++,
        name: name,
        done: false
    }
 ])
}
function handleChange(ele){
setCounters(
 counters.map((counter)=>{
    if(counter.id===ele.id){
        return ele
    }else{
        return counter
    }
 })
)
}
function handleDelete(eleId){
setCounters(counters.filter((c)=>c.id!==eleId))
}

return(
    <>
    <input type='text' onChange={(e)=>setName(e.target.value)} value={name}/>
    <button onClick={handleClick}>add</button>
    <CounterAdd arrd={counters}  onChange={handleChange} onDelete={handleDelete}/>
    {add>0?<button onClick={(e)=>setAdd(n=>n-10)}>-10</button>: <button onClick={(e)=>setAdd(n=>n-10)} disabled>-10</button>}
    {add}
    <button onClick={(e)=>setAdd(n=>n+10)}>+10</button>
    </>)
}

function CounterAdd({arrd ,onChange , onDelete}){
   

const tasks=arrd.map(ele=><li key={ele.id}>
                       <Task onChange={onChange} onDelete={onDelete} ele={ele}/> </li>)
return <ul>{tasks}</ul>
}
function Task({onChange,onDelete,ele}){
    const [changeData,setChangeData]=useState(false);
    return(
        <>
        {changeData?
        <>
        <input value={ele.name} onChange={(e)=>onChange({...ele,name:e.target.value})}/>
        <button onClick={()=>setChangeData(false)}>Save</button>
        </>
        :
        <>
        {ele.name}
        <button onClick={(e)=>setChangeData(true)}>Edit</button>
        </>
        }
        <button onClick={(e)=>onDelete(ele.id)}>Delete</button>
        </>
    )
}
let nextIder=3;
const initialCountra=[
    {id:0,name:'pani puri',done:true},
    {id:1,name:'vad pav',done: false},
    {id:2,name:'biryani',done:false}
];

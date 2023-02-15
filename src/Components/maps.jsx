import { useState } from "react";



const initialCounters=[0,0,0,0,0,0];
export default function List(){
    const [counters,setCounters]=useState(initialCounters)
    function handleIncrementClick(index){
    const nextCounters=counters.map((c,i)=>{
        if(i===index){
            return c+1
        }else{
            return c
        }
    }
    )
    setCounters(nextCounters)
    }
    return(
        <>
    <ul>
     {counters.map((counters,i) => (
     <li key={i}>{counters}
     <button onClick={()=>handleIncrementClick(i)}>+1</button>
     </li>
     ))} 
     </ul></>
     )
}

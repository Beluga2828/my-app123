import { useState } from "react";



export const Reducerex=()=>{
const [shop,setShop]=useState(shopItems);
const [crt,setCrt]=useState(false);
const [shape,setShape]=useState(initialShapes);
const [answer,setAnswer]=useState('');
const [err,setErr]=useState(null);
const [status,setStatus]=useState(typing);
if(status==='success'){
    return <h1>thats the right answer!</h1>
}

function handleChange(ele){
setShop(shop.map(
    s=>{if(ele.id===s.id){
        return <input value={ele.item} onChange={(e)=>handleChange({...ele,item:e.target.value})} />
    }else{
     return s
    }}
))
}
let trent;
function handleForm(){
  
}
return(
    <>
   <ul>
    {shop.map(ele=><li key={ele.id}>
        <input type='checkbox' checked={ele.mark} onChange={(e)=>handleChange({...ele,mark: e.target.checked})}/>
        {ele.item}<button onClick={()=>handleChange(ele)}>edit</button>
     {/*   {crt?<> <input value={ele.value} onChange={(e)=>handleChange({
        ...ele,
        item:e.target.value
    })}/><button onClick={()=>handleClick(ele)}>save</button></>:
      // <>{ele.item}<button onClick={()=>setCrt(true)}>Edit</button></>
       }*/}
       <button onClick={()=>setShop(shop.filter(c=>c.id!==ele.id))}>Delete</button>
       </li>)
    }</ul>
    <div>
        <button onClick={()=>setShape(shape.map(e=>{if(e.type==='square'){return e}else return {...e,x:e.x+50}}))} >click to move</button>
    {shape.map(ele=>
            (<div key={ele.id} style={{background: 'red',
                                     position:'absolute',
                                     left: ele.x,
                                     top: ele.y,
                                     borderRadius: ele.type==='circle'? '50%':'',
                                     width: 20,
                                     height:20 }}></div>)
        )
    }</div>
    <div><form>
        <textarea onChange={(e)=>setAnswer(e.target.value)} value={answer}></textarea>
        <button onClick={handleForm}>submit</button>
        </form></div>
    </>
)
}

const shopItems=[
    {id: 0,item:'apple',mark: true},
    {id: 1,item:'banana',mark: false},
    {id: 2,item:'gauva',mark: false},
    {id: 3,item:'pumpkin',mark: false}
];
let nextId=4;
const initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
  ];
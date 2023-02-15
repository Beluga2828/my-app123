import { useState } from "react";
import Display from "./formDisplay";

let uniqId=0;
export const Form5 = () => {
  const [form,setForm]= useState({
    user_name1:'',
    address:'',
    beds:0,
    //uniqId:0
   });
const [button4,SetButton4]=useState(false);
const [arry3,setArry3]=useState([]);
//console.log(button4)

function handleChange(e){
  setForm((prevEle)=>{return{
    ...prevEle,
    [e.target.name]:e.target.value,
  
   }})
}
//const arry3=[];
let button3;

function handleSubmit(e){
e.preventDefault();
const form1={
  user_name1:form.user_name1,
  address:form.address,
  beds:form.beds,
};
setForm({...form})
setArry3([
  ...arry3,
{form: form,
 id: uniqId++}
])
SetButton4(arry3.length!==0);
//console.log(arry3)
}

//console.log(button4);
console.log(arry3);
if(button4){
  button3=<Display arrey={arry3} />
}
return(
        <>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label>Name:</label>
              <input type="text" id="name" name="user_name1" onChange={handleChange}//onChange={(e) => setForm({  ...form, user_name1: e.target.value })} 
              value={form.user_name1} placeholder='typo' required />
            </li>
            <li>
              <label>E-mail:</label>
              <input type="text" id="mail" name="address" onChange={handleChange}// onChange={(e) => setForm((prevEle) => { return { ...prevEle, address: e.target.value }; })} 
              value={form.address} required />
            </li>
            <li>
              <label>Message:</label>
              <input type='number' name="beds" onChange={handleChange}//onChange={(e) => setForm({ ...form, beds: e.target.value })} 
              value={form.beds} required />
            </li>
            <li>
              <button type="submit" >submit</button>
            </li>
          </ul>
        </form>
        {button3}
     </>
    )
}


export default function Display({arrey}){ 
   const array1=arrey.map((ele)=><li key={ele.id}>{ele.form.user_name1},{ele.form.address},{ele.form.beds}</li>);
   //console.log(array1);
   return(
       <>
       <ul>
           {array1}
       </ul>
       </>
   )
   }
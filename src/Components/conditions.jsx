export default function  Packinglist(){
  return(
    <section>
        <ul>
            <Item isPacked={true} name='Spacesuit'/>
            <Item isPacked={true} name='spaceship'/>
            <Item isPacked={false} name='deathnote'/>
        </ul>
    </section>
  )
}

function Item({isPacked , name}){
      // return <li>{isPacked?  <del>{name+'✔'}</del>:name}</li>
   /* if(isPacked){
       return <li>{name}✔</li>
    };
    return <li>{name}</li>*/
    /* return <li>
      {name}{isPacked&&'✔'}
    </li> */
    
    let innerName = name;
    if (isPacked) {
      innerName = name + " ✔";
    }
    return (
      <li className="item">
        {innerName}
      </li>
    );
  }


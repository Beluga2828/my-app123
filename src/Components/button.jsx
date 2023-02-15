function Button1({children,onClick}){
    return(
        <button onClick={e=>{
            e.stopPropagation();
            onClick();
        }}>{children}</button>
    );
}


export default function Toolbar1(){
    return(
    <div  onClick={() => {
        alert('You clicked on the toolbar!');
      }}>
        <Button1 onClick={() => alert('Playing!')}>PlayMovie!
        </Button1>
        <Button1 onClick={() => alert('Uploading!')}>
          UploadImage
        </Button1>
      </div>
    );
}
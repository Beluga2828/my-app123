function AlerButton({ message, children }) {
    return (
        <button onClick={() => alert(message)}>{children}</button>
    )

}

export default function Toolbar() {
    return (
        <><AlerButton message={'playing movie...!'}>Play Movie</AlerButton>
            <AlerButton message={'play songs..!'}>Play Song</AlerButton>
            <PlayMovie movieName="Avengers end Game" />
            <UploadButton />
        </>
    )
}
function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>{children}</button>
    );
}
function PlayMovie({ movieName }) {
    return (
        <Button onClick={() => alert(`playing${movieName}`)}>Play'{movieName}'</Button>
    )
}
function UploadButton() {
    return (
        <Button onClick={() => alert('uplading file bro!')}>uPLOADFILEL12!</Button>
    )
}

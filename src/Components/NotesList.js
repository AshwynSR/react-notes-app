import AddNote from "./AddNote";
import Note from "./Note";

export default function NotesList({Data , handleClick, handleDelete}){
    return(
       <div className="notes-list">
        {Data.map((note) => (
             <Note 
                id = {note.id}
                text = {note.text}
                date = {note.date}
                handleDelete = {handleDelete}
             />
        ))}
        <AddNote handleClick = {handleClick} />
       </div>
    )
}
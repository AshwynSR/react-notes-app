import {MdDeleteForever} from "react-icons/md";

export default function Note({id, text, date, handleDelete}){

    const handleDeleteNote = () =>{
        handleDelete(id);
    }

    return(
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <button className="delete" onClick={handleDeleteNote}><MdDeleteForever className="delete-icon" size="1.3em"/></button>
                
            </div>

        </div>
    )
}
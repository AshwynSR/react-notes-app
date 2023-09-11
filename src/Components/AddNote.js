import { useState } from "react";
import {MdAddComment} from "react-icons/md"

export default function AddNote({handleClick}){
    const [textData, setTextData] = useState("");
    const [limit, setLimit] = useState(200);
    
    const handleChange = (e) => {
        if(200-e.target.value.length >= 0){
            setTextData(e.target.value)
            setLimit(200-e.target.value.length)
        }
    }

    const handleSaveClick = (e) =>{
        if(textData.trim().length > 0){
            handleClick(textData);
            setTextData("");
        }
    }

    return(
        <div className="note new">
            <textarea rows="4" cols="8" placeholder="Type your note here..." 
                onChange={handleChange} value={textData}></textarea>
            <div className="note-footer">
                <small>{limit}</small>
                <button className="save" onClick={handleSaveClick}><MdAddComment className="add-icon" size="1.3em"/></button>
            </div>

        </div>
    )
}
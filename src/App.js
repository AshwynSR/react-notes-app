import { useState } from "react"
import NotesList from "./Components/NotesList"
import Data from "./Components/NotesData"
import Search from "./Components/Search"

export default function App(){
  const [notes, setNotes] = useState(Data)
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const addNote = (text) =>{
    const date = new Date();
    const newNote =  {
        text: text,
        date: date.toLocaleDateString(),
      }
    setNotes([...notes, newNote]);
  }

  const deleteNote = (id) =>{
    const newNotes = notes.filter((note)=> note.id !== id)
    setNotes(newNotes);
  }

  const handleToggle = () =>{
    setDarkMode(prevState => !prevState);
  }

  return(
    <div className={darkMode ? 'toggled' : 'untoggled'}>
      <div className="container">
        <div className="header-container">
          <h1>Notes App</h1>
          <button className="toggle" onClick={handleToggle} >Toggle Theme</button>
        </div>
        
        <Search handleSearch={setSearchText}/>
        <NotesList Data={
          notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))} 
          handleClick={addNote} 
          handleDelete={deleteNote} 
        />
      </div>
    </div>
  )
}  
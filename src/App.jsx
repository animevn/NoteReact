import React, {useState} from "react";
import Header from "./Header";
import FormNote from "./FormNote";
import Note from "./Note";
import Footer from "./Footer";

function App() {

  const [notes, setNotes] = useState([{title:"Hello", content:"Ciao"}]);

  function addNote(value) {
    setNotes(oldNotes=>[value, ...oldNotes]);
  }

  function deleteNote(id) {
    setNotes(oldNotes => oldNotes.filter((note, index)=>{return index !== id}))
  }

  return (
      <div>
        <Header/>
        <FormNote sendNote={addNote}/>
        <div className="container-fluid py-4">
          <div className="row">
            {notes.map((note, index)=>{
              return <Note key={index} id={index} noteTitle={note.title}
                           noteContent={note.content} onDelete={deleteNote}/>
            })}
          </div>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
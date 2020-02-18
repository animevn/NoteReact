import React from "react";
import Card from "./Card";

function Note(props){

  function onDeleteNote(value) {
    props.onDelete(value);
  }

  return <Card id={props.id} name={props.noteTitle}
               content={props.noteContent} onDeleteCard={onDeleteNote}/>;
}

export default Note;
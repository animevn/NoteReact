import React from "react";
import Card from "./Card";

const name1 = "Note 1";
const content1 = "Hello Ciao";

const name2 = "Note 2";
const content2 = "Ciao hello";

function Note() {
  return (
      <div className="container-fluid py-4">
        <div className="row">
          <Card name={name1} content={content1}/>
          <Card name={name2} content={content2}/>
        </div>
      </div>
  );
}

export default Note;
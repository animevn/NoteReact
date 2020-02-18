import React from "react";

function Card(props){

  function handleDeleteClicked() {
    props.onDeleteCard(props.id);
  }

  return (
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 p-2">
        <div className="card shadow-sm">
          <h5 className="text-center pt-2">{props.name}</h5>
          <p className="text-center">{props.content}</p>
          <button className="btn btn-sm ml-auto mb-1 text-danger" onClick={handleDeleteClicked}>
            Delete
          </button>
        </div>
      </div>
  );
}

export default Card;
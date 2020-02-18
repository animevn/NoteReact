import React from "react";

function Card(props) {
  return (
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-6 p-2">
        <div className="card shadow-sm h-100">
          <h5 className="text-center pt-2">{props.name}</h5>
          <p className="text-center">{props.content}</p>
        </div>
      </div>
  );
}

export default Card;
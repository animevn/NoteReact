import React, {useState} from "react";

function FormNote(props) {

  const [form, setForm] = useState({
    title:"",
    content:""
  });


  function handleInputChanged(event) {
    let {name, value} = event.target;
    if (name === "title"){
      setForm({
        title: value,
        content: form.content
      })
    }

    if (name === "content"){
      setForm({
        title: form.title,
        content: value
      })
    }
  }

  function handleSaveClick() {
    console.log(form)
  }

  return (
      <div className="col-xl-7 col-lg-8 col-md-9 col-sm-10 col-11 p-2 mx-auto">
        <div className="form-group p-3 bg-warning rounded-lg shadow">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Note title" name="title"
              value={form.title} onChange={handleInputChanged}/>
            <div className="input-group-append">
              <button className="btn btn-success" type="button" onClick={handleSaveClick}>
                Save
              </button>
            </div>
          </div>
          <textarea className="form-control" id="note-content" rows="2" placeholder="Note content"
            value={form.content} onChange={handleInputChanged} name="content">
          </textarea>
        </div>
      </div>
  );
}

export default FormNote;
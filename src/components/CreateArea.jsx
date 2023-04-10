import React, { useState, useContext} from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import NoteContext from "../context/notes/NoteContext";



function CreateArea() {

  const context = useContext(NoteContext);
  const {addNote} = context;



  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
   addNote(note.title , note.content);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && 
          <input
           onChange={handleChange}
            name="title"
            placeholder="Title"
           value={note.title}
            minLength={3}
            required
          />
         }
        <textarea
        onClick={expand}
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          minLength={5}
          required
        />
        <Zoom in={isExpanded}>
          <Fab className="fab" onClick={submitNote} disabled={note.title.length<3||note.content.length<5}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

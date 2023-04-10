import React, { useContext } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import NoteContext from "../context/notes/NoteContext";


function Note(props) {

  const context =useContext(NoteContext);
  const{deleteNote} = context;

  const{noteItem ,updateNote}=props;

  function handleDelete(){
    deleteNote(noteItem._id);
  }

  function handleEdit(){
     updateNote(noteItem)
  }
  // function handleClick() {
  //   props.onDelete(props.id);
  // }

  return (
    <div className="note">
      <h1>{noteItem.title}</h1>
      <p>{noteItem.description}</p>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
      <button onClick={handleEdit} data-bs-toggle="modal" data-bs-target="#exampleModal">
        < EditTwoToneIcon/>
      </button>
    </div>
  );
}

export default Note;

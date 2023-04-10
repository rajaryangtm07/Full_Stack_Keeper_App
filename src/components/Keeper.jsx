import React , {useContext , useState , useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Note from './Note';
import CreateArea from './CreateArea';
import NoteContext from '../context/notes/NoteContext';


export const Keeper = () => {

  const navigate = useNavigate();
  const context = useContext(NoteContext);

  const{notes , getNotes , editNote } = context;
  useEffect(()=>{
    if(localStorage.getItem('token')){
      getNotes() 
      console.log(notes);
    }else{
      navigate('/login');
    }
  }, [])

  const [note, setNote] = useState({id:"",title:"" ,description:""});

  const onChange=(e)=>{
    setNote({...note , [e.target.name]: e.target.value});
  }

  const updateNote=(currentNote)=>{
    setNote({
      id:currentNote._id,
      title:currentNote.title,
      description:currentNote.description
     });
  }

  
  return (
    <div>
     {/* <div> modal ka code</div>  */}
        {/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">

   {/* modal header */}
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

    {/* modal body */}
      <div className="modal-body">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} minLength={3} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">description</label>
          {/* <input type='text' className='form-control' id='title' value={note.title} onChange={onChange} minLength={3} required/> */}
          <textarea className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required/>
        </div>
      </div>

     {/* modal footer */}
      <div className="modal-footer">
        <button type="button" className='btn btn-primary' data-bs-dismiss="modal" onClick={()=>editNote(note.id , note.title , note.description)} disabled={note.title.length<3 || note.description.length<5} >Save Note</button>
      </div>
    </div>
  </div>
</div>

     <CreateArea/>
     {  notes.map((noteItem , index)=>{
        return <Note
        key={index}
        noteItem={noteItem}
        updateNote={updateNote}
        />
      })} 
    </div> 
  )
}


export default Keeper;
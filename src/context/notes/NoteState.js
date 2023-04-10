//import { PinDropSharp } from "@material-ui/icons";
import React, { useState } from  "react";
import NoteContext from "./NoteContext";

const NoteState =(props)=>{
    // localhost:5000/api/notes/addnotes

    const host ="http://localhost:5000";
    const [notes, setNotes] = useState([]);

    // get all notes api call
    const getNotes= async()=>{
        //API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
            method:"GET",
            headers:{
                'auth-token':localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setNotes(json);
    }


    // const notesInitial =[
    //     {
    //         "_id": "641c6b86f52fbc6b45cf8c9a",
    //         "user": "6415cd6852bc44956b3d30e9",
    //         "title": "Coding",
    //         "description": "Pease wake up early",
    //         "tags": "General",
    //         "date": "2023-03-23T15:08:54.749Z",
    //         "__v": 0
    //       }
    // ] 
  //  const[notes,setNotes] = useState(notesInitial);

    // Add a note
     const addNote =async(title , content)=>{
       console.log("title: ", title, " content: ", content);
        //API call 
        const response = await fetch(`${host}/api/notes/addnotes`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
            },
            body: JSON.stringify({
                'title':title,
                'description':content,
            })
           
        });
        const json = await response.json();
        setNotes(notes.concat(json));

     }
    // Delete a note
    const deleteNote =async(id)=>{
         await fetch(`${host}/api/notes/deletenote/${id}`,{
            method:"DELETE",
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
            }
        });
        
        
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes);
    }
    // Edit a note
    const editNote =async(id,title,description)=>{
        console.log(id, title, description);
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
            },
            body: JSON.stringify({
                'title':title,
                'description':description
            })
        });
     console.log(await response.json());
    //  setNotes(await response.json())
    

     // logic to edit in client
     let newNotes = JSON.parse(JSON.stringify(notes));
     for(let index = 0 ; index<notes.length ; index++){
        const element = notes[index];
        if(element._id===id){
            newNotes[index].title=title;
            newNotes[index].description=description;
            break;
        }
     }
     setNotes(newNotes);
    }
     
    return (
        // <NoteContext.Provider value={{notes, setNotes , addNote , editNote , deleteNote ,getNotes}} >
        //     {props.children}
        // </NoteContext.Provider >
        <NoteContext.Provider value={{notes, setNotes , addNote , editNote , deleteNote ,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default NoteState;   
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function CreateNote(props) {
  const [expand, setExpand]=useState(false);
    const [note,setNote]=useState({
        title:"",
        content:"",
    })

    const InputEvent = (event) => {
        // const value=event.target.value;
        // const name=event.target.name;

        const {name,value}=event.target;

        setNote((prevData)=> {
            return{
                ...prevData,
                [name]:value,//agar mera name match(niche value= note.title hai usse) karta hai to value assign hojae
            };
        });
        console.log(note);
    };
  const addEvent = () => {
      props.passNote(note);
      setNote({
      title:"",
      content:"",
  });
  }
 
  const expandit = () => {
    setExpand(true);
  }
 
  const backtonormal = () => {
    setExpand(false);
  }
  return (
    <>
      <div className="main_note" onDoubleClick={backtonormal}>
      <form >
      {expand?
      <input 
       type="text" name="title" onChange={InputEvent} value={note.title} placeholder='Title'
       />:null}
      <textarea rows="" column="" name="content" onChange={InputEvent} onClick={expandit} value={note.content} placeholder='Write a note'>
      </textarea>
      {expand?
     <Button onClick={addEvent}>
     <AddIcon className='plus_sign'></AddIcon>
     </Button>
     :null}
      </form>
      </div>
    </>
  )
}

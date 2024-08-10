import React from 'react';

function NoteDetails(props){
  return(
    <div className="note-details">
                    <button onClick={() => {props.backFunc()}}>Back</button>
                    <h2>{props.note.title}</h2>
                    <p>{props.note.content}</p>
    </div>
       );
}

export default NoteDetails;
import React from "react";



function Note(props) {

    function deletion(event, index){
        event.stopPropagation();
        props.setState(
            props.state.filter((_ , i) => 
             i !== index
            )
        )
    }


    return (
        <div className="note" onClick={props.onClick}>
            <h1>{props.title}</h1>
            <p>{props.content}</p><br/>
            <button className="icon-button"
                     onClick = {(e) => deletion(e,props.ind)}                
            >
           </button>
        </div>
    );
}

export default Note;
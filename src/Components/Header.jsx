import React, { useState } from "react";


function Header(props) {

    const [inputObj , setInputObj] = useState({title : "" , content : ""});
    function handleChange(event){
        const {name , value} = event.target; 
        setInputObj({...inputObj , [name] : value });
    }

    function submission(){
            if(inputObj.title.trim() === "" || inputObj.content.trim() === "" ){
                alert("Fill all the empty fields");
            }else{
            props.setState([...props.state , inputObj]);
            setInputObj({title : "" , content : ""});
            document.querySelector(".addNote").style.visibility = "hidden";

            }
    }

    function addNote(){
        document.querySelector(".addNote").style.visibility = "visible";
    }

    return (
        <header><h1>Google Notes</h1>
            <div className = "addNote" style = {{visibility : "hidden"}}>
               <input type = "text" name = "title" onChange={handleChange} placeholder =  "Enter title" value = {inputObj.title} />         
               <textarea 
                    type = "text" 
                    name = "content" 
                    onChange={handleChange} 
                    placeholder = " Enter note" 
                    value = {inputObj.content}> 
                </textarea>  
                <div class = "sbmtCncl">
                    <button class = "submit" onClick = {submission}>Submit</button>
                    <button class = "cancel" onClick = {() => {
                        setInputObj({title : "" , content : ""});
                        document.querySelector(".addNote").style.visibility = "hidden";
                         }}>
                            Cancel
                     </button>
                </div>     

            </div>
            <button class = "addNoteBtn" onClick={addNote}>Add Note</button>

        </header>
    );
}

export default Header;
import React , {useState} from "react";
import Header from "./Header";
import Note from './Note';
import Footer from './Footer';
import '../styles/styles.css';
import notes from "../scripts/notes";
import NoteDetails from "./NoteDetails";





function App() {

    const [noteList , setNoteList] = useState(notes);
    const [selectedNote, setSelectedNote] = useState(null);

    function noteDetails(note) {
        setSelectedNote(note);
    }

    function backToNotes() {
        setSelectedNote(null);
    }

    function createNote(note , index) {
        return (
            <Note
                state={noteList} 
                setState={setNoteList}
                ind = {index} 
                key={index}
                title={note.title}
                content={note.content}
                onClick = {() => {noteDetails(note)} }
            />
        );
    }

    return (
        <div>
            <Header
                state={noteList} setState={setNoteList}
            />
            {selectedNote ? (<NoteDetails 
                                 note = {selectedNote}
                                 backFunc = {backToNotes}
                                       
                             />)
                             :
            (<div id = "noteDiv">{noteList.map(createNote)}</div>)}
                    
            <Footer />
        </div>
    );
}

export default App;
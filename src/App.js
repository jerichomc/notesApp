import React from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./styles.css";

function App() {
  const [notes, setNotes] = React.useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Notes App</h1>
      <NoteForm onAdd={addNote}></NoteForm>
      <NoteList notes={notes} onDelete={deleteNote}></NoteList>
    </div>
  );
}

export default App;

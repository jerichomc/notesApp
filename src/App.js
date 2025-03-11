import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  // Fetch notes from the backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/notes")
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the notes!", error);
      });
  }, []);

  // Handle input changes for new note
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNote({ ...newNote, [name]: value });
  };

  // Handle note creation
  const handleCreateNote = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/notes", newNote)
      .then((response) => {
        setNotes([...notes, response.data]);
        setNewNote({ title: "", content: "" }); // Clear input fields
      })
      .catch((error) => {
        console.error("There was an error creating the note!", error);
      });
  };

  // Handle deleting a note
  const handleDeleteNote = (id) => {
    axios.delete(`http://localhost:5000/api/notes/${id}`)
      .then(() => {
        setNotes(notes.filter(note => note._id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the note!", error);
      });
  };

  // Handle updating a note
  const handleUpdateNote = (id) => {
    const updatedNote = { ...newNote };
    axios.put(`http://localhost:5000/api/notes/${id}`, updatedNote)
      .then((response) => {
        const updatedNotes = notes.map(note =>
          note._id === id ? response.data : note
        );
        setNotes(updatedNotes);
        setNewNote({ title: "", content: "" }); // Clear input fields
      })
      .catch((error) => {
        console.error("There was an error updating the note!", error);
      });
  };

  return (
    <div className="App">
      <h1>Notes App</h1>

      {/* Form to add a new note */}
      <form onSubmit={handleCreateNote}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newNote.title}
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          placeholder="Content"
          value={newNote.content}
          onChange={handleInputChange}
        />
        <button type="submit">Add Note</button>
      </form>

      <h2>All Notes</h2>
      <div>
        {notes.map((note) => (
          <div key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => handleDeleteNote(note._id)}>Delete</button>
            <button onClick={() => handleUpdateNote(note._id)}>Update</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

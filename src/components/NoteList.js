import React from "react";
import NoteItem from "./NoteItem";

const NoteList =({notes, onDelete}) => {
    return (
        <div>
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default NoteList;
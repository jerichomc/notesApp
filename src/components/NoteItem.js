import React from 'react';

const NoteItem =({note, onDelete}) => {
    return (
        <div className='note'>
            <h3>{note.title}</h3> 
            <p>{note.content}</p>
            <button className='delete-button' onClick={() => onDelete(note.id)}>Delete</button>
        </div>
    );
};

export default NoteItem;
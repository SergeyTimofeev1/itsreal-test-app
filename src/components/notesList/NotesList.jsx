import React, { useState } from 'react';
import AddNoteButon from '../addButton/AddNoteButon';
import Note from '../note/Note';
import './notesList.scss'


const NoteList = () => {
  const [notes, setNotes] = useState([])

  const addNote = () => {
    const newNote = {
      id: notes.length + 1,
      text: 'Заметка номер ',
    }
    setNotes([...notes, newNote])
  }

  const removeNote = (note) => {
    setNotes(notes.filter(n => note.id !== n.id))
  }



  return (
    <div className="notes">
      <AddNoteButon addNote={addNote} />
      <div className="notes-list">
        <ul className="notes-list__list list-group">
          {notes.length !== 0
            ? notes.map((note, i) =>
              <Note
                id={i + 1}
                key={note.id}
                note={note}
                remove={removeNote}
                notes={notes}
              />)
            : <h2>Добавьте заметку</h2>
          }
        </ul>
      </div>
    </div>
  );
}

export default NoteList;

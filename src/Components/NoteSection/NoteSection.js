import React from 'react'
import "./notesection.css"
import Notes from '../Notes/Notes'
const NoteSection = () => {
  return (
    <>
        <div className="notesection">
            <Notes/>
            <Notes/>
            <Notes/>
        </div>
    </>
  )
}

export default NoteSection
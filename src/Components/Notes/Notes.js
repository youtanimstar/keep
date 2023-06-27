import React from 'react'
import "./notes.css"
const Notes = () => {
  return (
    <>
        <div className="notes">
            <input type="text" name='title' className='title' placeholder='Your Title'/>
           <div name="textarea" className='textarea' contenteditable="true" data-placeholder="Type Something......."></div>
        </div>
    </>
  )
}

export default Notes
import React from 'react'
import "./index.css"
import SideBar from './Components/SideBar/SideBar'
import NoteSection from './Components/NoteSection/NoteSection'
import NewButton from './Components/NewButton/NewButton'
const App = () => {
  return (
    <>
    <div className="container">
    <SideBar/>
    <NoteSection/>
    <NewButton/>
    </div>
    
    </>
  )
}

export default App
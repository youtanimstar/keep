import React, { useState } from 'react'
import "./sidebar.css";
import SidebarItems from '../SidebarItems/SidebarItems';
const SideBar = () => {
  const [title,setTitle] = useState([
    {
      id: 1,
      id2: "a",
    title: "Youtanimstar"
  },
  {
    id: 2,
    id2: "b",
  title: "Lorem"
},
{
  id: 3,
  id2: "c",
title: "Deep"
},

]);

  return (
    <>
    <div className="sidebar">
      {
        title.map((event)=>{
          // const id = new Date().getTime().toString();
          // console.log(id);
          return <SidebarItems title={event.title} id={event.id} id2={event.id2}/>
        })
      }
      
    </div>
    </>
  )
}

export default SideBar
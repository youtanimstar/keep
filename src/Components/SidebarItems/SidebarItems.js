import React, { useState } from "react";
import "./sidebaritem.css";
import { LuMoreVertical } from "react-icons/lu";




const SidebarItems = ({title, id, id2}) => {

  // console.log(title,id , id2);
  window.onclick = (event)=>{
    console.log(event);
    if(event.target.matches('.textarea'))
    {
      
        
          document.getElementById(id).classList.remove("show");
        
    }
  }

  const [comclass,setcomclass] = useState({
    class: "dropdown",
    visable: false
  });


  return (
    <>
      <div className="sidebaritems">
        <h2>{title}</h2>
        <LuMoreVertical className="three-dots" id={id2} onClick={()=>{
          // document.getElementById(id).classList.toggle("show")
          setcomclass((prev)=>{
            if (prev.visable === false) {
              return ({
                class: "dropdown show",
                visable: true
              })
            }
            else
            {
              return ({
                class: "dropdown",
                visable: false
              })
            }
            
          });
        }}/>
        <ul id={id} className={comclass.class}>
          <div className="item">Edit</div>
          <div className="item">Copy</div>
          <div className="item">Share</div>
        </ul>
      </div>
    </>
  );
};

export default SidebarItems;

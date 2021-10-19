import React from "react";

function MenuItem(props) {
  return (
    <div className="menuitem-component">
        
      {/* <p>this is menuitem component</p> */}
      <h3>{props.categoryname.name}</h3>
      <img src={props.categoryname.src} className="menu-img"/>
      <p>{props.categoryname.description}</p>
  
    </div>
  );
}

export default MenuItem;
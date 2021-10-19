import React from "react";

function MenuItem(props) {
  return (
    <div className="menuitem-component">
        
      {/* <p>this is menuitem component</p> */}
      <p>{props.categoryname}</p>
  
    </div>
  );
}

export default MenuItem;
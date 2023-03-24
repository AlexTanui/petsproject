import React from "react";
import "./Header.css";


function Header() {  
  return (
    <div className="header">
      
        <img
          className="header__logo"
          src="https://edita.com.eg/wp-content/uploads/2020/06/todo-logo.png"
        />


      <div className="header__nav">
        
          <div className="header__option">
            <h1> My Year Todo</h1>
            
          </div>  
      </div>
    </div>
  );
}

export default Header;
import React from "react";

function NavBar() {
  const links = ["Home", "About", "Projects"];

  const linkElements = links.map((link)=>{
    return (
      <li key={link}>
         <a href ={`#${link}`}>{link}</a>
       </li>
    );
   
   
  });

  return (
    <nav>
      <ul>{linkElements}</ul>
    </nav>
  );
}


export default NavBar;

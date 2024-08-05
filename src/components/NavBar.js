// NavBar.js
import React from 'react';

function NavBar() {
  const links = ['home', 'about', 'projects']; // Array representing each link on the page

  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={`#${link}`}>{link}</a>
      ))}
    </nav>
  );
}

export default NavBar;

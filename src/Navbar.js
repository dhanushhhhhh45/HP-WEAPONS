import React from 'react';
// 'import iphone from './ip.png


const Navbar= () => {
  return (
    <nav className="HomePage">
      
      <ul className="nav_links">
        <li> <a href="/home">Home</a></li>
        <li> <a href="#">Contacts</a></li>
        <li> <a href="#">About us</a></li>
      </ul>
      <div className="search-item">
        <input type="text" placeholder="SEARCH WEAPONS..." className="search"/>
      </div>
    </nav>
  );
};

export default Navbar;

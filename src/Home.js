// import React from 'react';
// import Navbar from './Navbar';
// const Home = () => {
//   return (
//      <div >
//       <Navbar/>

//         <h1 className='HOME PAGE'> </h1>
//     </div>
//   )
// }

import React from 'react'
import iphone from "./hpnew.png";
import Productcard from './Productcard';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   
    <div> <nav className="navbar">
    <div className="logo">  <img className='logo' src={iphone} alt=''/></div>
    <input type="text" placeholder="Search Weapons..." className="search-bar" />
    <ul className="nav-links">
     <h4>
      <Link to ="./ About" className="About"> <li><a href="#" className='r'>About</a></li></Link>
    
      <Link to ="/" className="Home">  <li><a href="/home" className='k'>Home</a></li></Link>
      <li><a href="#" className='a'>Contact</a></li>
     
      </h4>
    </ul>
   
  </nav>
  <Productcard/></div>
  )
}

export default Home;


import React from 'react';
import Home from './Home';
import { BrowserRouter ,Router,Route, Routes } from 'react-router-dom';
import Login from './Login';

const Pages = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element ={<Login/>}/>
        <Route path="/Home" element ={<Home/>}/>
        </Routes>
    </BrowserRouter>
    
  )
}

export default  Pages; 
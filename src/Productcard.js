import React from 'react'
import Shoe from "./BAT11.webp";
import tees from "./BAT2.webp";
import cap from "./BAT22.webp";

const Productcard = () => {
  return (
  
   <div id='cards'>
      <div className='card'>
      < img className="image3" src={Shoe} alt="" />
          <h1>HP MP40 EDITION</h1>
          <p>RAPID SPEED</p>
          <h2>3000 INR</h2>
         <div id='colors'>
          <div className='c1'></div>
          <div className='c2'></div>
          <div className='c3'></div>
          <button>CLICK TO ORDER</button>
      </div>
    </div>
      

      
      <div className='card'>
      < img className="image3" src={ tees} alt="" />
          <h1>HP AWM EDITION</h1>
          <p>PERFECT ACCURACY</p>
          <h2>3200 INR</h2>
         <div id='colors'>
          <div className='c1'></div>
          <div className='c2'></div>
          <div className='c3'></div>
          <button>CLICK TO ORDER</button>
      </div>
      </div>

      
      <div className='card'>
      < img className="image3" src={cap} alt="" />
          <h1> M1887 EDITION</h1>
          <p>HIGH POWER</p>
          <h2>3500 INR</h2>
         <div id='colors'>
          <div className='c1'></div>
          <div className='c2'></div>
          <div className='c3'></div>
          <button>CLICK TO ORDER</button>
          </div>
      </div>
      </div>


      
      
      );
};

export default Productcard;
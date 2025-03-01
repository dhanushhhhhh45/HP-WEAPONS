import React from "react";
 import "./Login.css";



 const Login = () => {
    
    var activeUser=localStorage.getItem("User-Name");
    const Signup =()=>{
        var userData =[
        {userName:"dhanushh",passCode:"122",cart:[]},
        {userName:"dhanu",passCode:"132",cart:[]},
         {userName:"AD",passCode:"152",cart:[]}
    ]
        var userName=document.getElementById("user").value;
        var userPassCode=document.getElementById("password").value;
        var activeDetail=userData.filter((data)=>
        {
            return userName==data.userName;
        });
        console.log(activeDetail);
        if(activeDetail.length>0){
            if(activeDetail[0].passCode==userPassCode)
              {console.log(activeDetail);
            
                localStorage.setItem('userName' ,userName);
                window.location.replace("/Home");
        
                
               
            }else{

                alert("WRONG PASSCODE");
                
            }
        }
        window.location.replace("/Home");
        



    } ;
    
    
   return (
     <div className="backGround">
       <div className="username">
        
         <input
         id="user"
       type="text" name="username" placeholder="Enter username or email">
            
         </input>

       <input 
       id="password"type="number"name="password"placeholder="Enter password"></input>

        <button onClick={Signup}
         className="bot"
          id="Submit">LOGIN</button>
      </div>
     </div>
   );
 };
 export default Login;
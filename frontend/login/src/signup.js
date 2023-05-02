import React from 'react'
import {useState} from 'react'


export const Signup = (props) => {
  const [newEmail, setEmail] = useState();
  const [newNumber, setNumber] = useState();
  

  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const {email} = newEmail;
    const {number} = newNumber;
    console.log(email, number);
    fetch("http://localhost:4000/signup",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        email: email,
        number: number
      }),
    }).then((res)=>res.json())
      .then((data)=>{
        console.log(data, "userRegister");
      });
  }
   

  return (
    <div>
    <div class="login">
    <form class="loginItems" onSubmit={handleSubmit}>      
    <div className='input-container '>
      <h2 style={{textAlign: 'center',fontSize: '40px'}}>Signup</h2>
            <p>
                <label>Email:</label><br></br>
                <input type="email" onChange={(e)=> setEmail({email: e.target.value})} class="input-field rounded" id="email" name="email" ></input>
            </p>
            <p>
            <label>Number:</label><br></br>
            <input type="number"  onChange={(e)=> setNumber({number: e.target.value})} class=" rounded" id="num" name="number" ></input>
            </p>
            
            <button class="btn-1">Submit</button>   
            </div>
    </form>
    </div>
</div>
  )
}

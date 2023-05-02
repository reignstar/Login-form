import React, { useState } from 'react'
import './login.css';

export const Login = () => {
  const [newEmail, setEmail] = useState();
  const [newNumber, setNumber] = useState();
  const [newPin, setPin] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { email } = newEmail;
    const { number } = newNumber;
    const { otp } = newPin;
    console.log(email, number, otp);
    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email: email,
          number: number,
          otp: otp
        }),
      })
      const data = response.json()
      if(response.status === 201){
        alert('loged in successful')
      }
      if(response.status == 400){
        alert('User not found')
      
      }
      if(response.status == 401){
        alert('Invalid pin')
      
      }
      if(response.status == 402){
        alert('Invalid number')
      
      }
    } catch (error) {

    }
    
  
     
   
  }


  return (
    <div>
      <div class="login">
        <form class="loginItems" onSubmit={handleSubmit}>
          <div className='input-container '>
            <h2 style={{ textAlign: 'center', fontSize: '40px' }}>Login</h2>
            <p>
              <label>Email:</label><br></br>
              <input type="email" onChange={(e) => setEmail({ email: e.target.value })} class="input-field rounded" id="email" name="email" ></input>
            </p>
            <p>
              <label>Number:</label><br></br>
              <input type="number" onChange={(e) => setNumber({ number: e.target.value })} class=" rounded" id="num" name="number" ></input>
            </p>
            <p>
              <label>Pin:</label><br></br>
              <input type="password" onChange={(e) => setPin({ otp: e.target.value })} class="input-field rounded" id="otp" name="otp"></input>
            </p>
            <button class="btn-1">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

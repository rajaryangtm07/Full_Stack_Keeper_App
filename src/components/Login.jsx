import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import LoginIcon from '@material-ui/icons/Login';



 const Login = () => {

  const navigate = useNavigate();

  const [user , setUser] = useState({
    email:"",
    password:""

  });

  


 const handleChange=(event)=>{
  const{name  , value} =event.target;

  setUser(prevValue=>{
    return{
      ...prevValue,
      [name]:value
    }
  });
 }
 //localhost:5000/api/auth/login
  const handleSubmit=async (event) =>{
    event.preventDefault();

    const response =await fetch("http://localhost:5000/api/auth/login",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },

      body: JSON.stringify({
        'email':user.email,
        'password':user.password
      })

      // body:new URLSearchParams({
        // 'email':user.email,
        // 'password':user.password
      // })
    });
  

  const json = await response.json();
  console.log(json);

  if(json.success){
    //save the authtoken and redirect

    localStorage.setItem('token' , json.authtoken);
    navigate('/notes');
  }
  else{
    // if failed
    alert("Please try to login with correct credentials");
  }
}
  return (
    <div>
      <div className='login'>
      <div  className='login_box' style={{fontFamily:"Alkatra" , marginTop:"40px"}}>
      <h1 className='login_heading' style={{marginTop:"50px"}}>Login</h1>
        <form onSubmit={handleSubmit}>

        <div className='mb-3 form-div'>
            <input onChange={handleChange} name="email" value={user.username} type="email" placeholder='Enter Your Email' className='form.create-note input'></input>
        </div>

        <div className='mb-3 form-div'>
            <input onChange={handleChange} name="password" value={user.username} type="password" placeholder='Enter Your Password' className='form.create-note input'></input>
        </div>
        <button className='login_button' type='submit' style={{color:'black'}}><i class="fa-solid fa-right-to-bracket"></i></button>
        </form>
      </div>
        
        </div>
    </div>
  )
}

export default Login;

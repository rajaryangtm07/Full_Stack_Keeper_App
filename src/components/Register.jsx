import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import HowToRegIcon from '@material-ui/icons/HowToReg';


export const Register = () => {

  const navigate = useNavigate();
  const[newUser,setNewUser] = useState({
    name:"",
    email:"",
    password:"",
    cpassword:""

  });

  const handleChange=(event)=>{
    const{name , value } = event.target;

    setNewUser(prevValue=>{
      return{
        ...prevValue,
        [name]:value
      }
    });
  }

  const handleSubmit=async(event)=>{
    event.preventDefault();
    if(newUser.password===newUser.cpassword){
      const response = await fetch("http://localhost:5000/api/auth/createUser",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          'name': newUser.name,
          'email':newUser.email,
          'password':newUser.password
        }),
        
        
      });
      const json = await response.json();
      console.log(json);
      if(json.success){
        //save the authtoken and redirect
        localStorage.setItem('token' , json.authtoken);
        navigate('/notes');
      }else{
        alert("Sorry a user with this email already exist");
      }
    }else{
      alert("Password Should Match");
    }
    }
  
  return (
    <div>
      {/* <marquee style={{bgcolor:"rgb(#ffffff)"}}>Welcome to keeper app</marquee> */}
      <div className='login'>
         <div className='register_box' style={{fontFamily:"Alkatra" , marginTop:"40px"}}>
         <h1 style={{fontFamily:"Alkatra"}}>Register</h1>
        <form onSubmit={handleSubmit}>
        
        <div className='mb-3 form-div' style={{margin:"40px"}}>
            <input onChange={handleChange} name="name" value={newUser.username} type="text" placeholder='Enter Your Name' className='form.create-note input'></input>
        </div>

        <div className='mb-3 form-div'>
            <input onChange={handleChange} name="email" value={newUser.username} type="email" placeholder='Enter Your Email' className='form.create-note input'></input>
        </div>

        <div className='mb-3 form-div'>
            <input onChange={handleChange} name="password" value={newUser.password} type="password" placeholder='Your Password' className='form.create-note input'></input>
        </div>

        <div className='mb-3 form-div'>
            <input onChange={handleChange} name="cpassword" value={newUser.cpassword} type="password" placeholder='Re-enter your Password' className='form.create-note input'></input>
        </div>
           
           <button  className='register_button' type='submit' style={{color:'black' , margin:"20px"}}>Register Me</button>
        </form>
         </div>
        
      </div>
    </div>
  )
}

export default Register;

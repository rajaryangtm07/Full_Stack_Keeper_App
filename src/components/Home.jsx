import React from 'react';
import { Link } from 'react-router-dom';


const Home = (props) => {
  return (
    <div>
      <div className="home jumbotron centered" style={{backgroundColor:" " , textAlign:"center" , fontFamily:"Alkatra"}}>
           <div className='container'>
             <i className='fas fa-key fa-6x'/>
             <h1 className='display-3'>Welcome to your note keeper</h1>
             <p className='lead'>Make your scretes more secure</p>
             <hr/>
             {/* kis page me le jaae yeh button uske liye hai   that is on clicking the button in which route user is to be sent */}
             <Link className='btn btn-light btn-lg home_register' to="/register" role="button">Register</Link>
             <Link className='btn btn-dark btn-lg home_register' to="/login" role="button">Login</Link>
           </div>
      </div>
    </div>
  )
} 

export default Home;
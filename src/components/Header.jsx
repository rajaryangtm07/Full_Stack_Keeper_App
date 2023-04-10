import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import { useNavigate } from "react-router-dom";
// import LogoutIcon from '@material-ui/icons/Logout';

function Header() {

  // useNavigation is a hook which gives access to navigation object. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.
  const navigate = useNavigate();

  const handleClick = ()=>{
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <header>
      <h1>
        <HighlightIcon/>
        Keeper
        {/* <marquee>Welcome to the Keeper App</marquee> */}
      </h1>
      {localStorage.getItem('token') ? <div onClick={handleClick} className="logout"  style={{color:'white'}}>Log Out </div> :null}
    </header>
  );
}

export default Header;

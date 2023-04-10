import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import Note from './Note';
// import CreateArea from './CreateArea';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import Keeper from './Keeper';
import NoteState from '../context/notes/NoteState';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>

      <NoteState>
        <Router>
          {/* mera navbar header se hai isliye pehle header laga diya  */}
          <Header />
          <Routes>
            {/*---- Route 1----- */}
            <Route exact path="/" element={<Home />} />
            {/*---- Route 2----- */}
            <Route exact path="/login" element={<Login />} />
            {/*---- Route 3----- */}
            <Route exact path="/register" element={<Register />} />
            {/*---- Route 4----- */}
            <Route exact path="/notes" element={<Keeper />}
            />
          </Routes>
          <Footer />
        </Router>
      </NoteState>

    </div>
  );
}

export default App;

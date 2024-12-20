import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/signup";
import Login from "./components/login";

const App = () => {

  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>}/>
          </Routes>
        </div>
      </Router>
      
    </div>
  )
}



export default App;

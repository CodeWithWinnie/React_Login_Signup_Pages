import React, {useState} from "react";
import Signup from "./components/signup";
import Login from "./components/login";

const App = () => {
  const [showSignup, setShowSignup] = useState(true);

  return (
    <div>
      {showSignup ? (< Signup/>) : (< Login/>)}

      <button onClick={() => setShowSignup(!showSignup)}>
        Toggle to {showSignup ? "Login" : "Signup"}
      </button>
    </div>
  )
}



export default App;

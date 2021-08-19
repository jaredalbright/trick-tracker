import Header from "./components/Header";
import AddTrick from "./components/AddTrick";
import Login from "./components/Login";
import UserDash from "./components/UserDash"
import { useState } from "react";
import React from "react";
//import trickDataService from "../services/trickDB"
//import { Switch, Route, Link} from "react-router-dom";

function App() {
  const [showNewTrick, setShowNewTrick] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <div className="App">
      <Header
        showAdd={() => setShowNewTrick(!showNewTrick)}
        setShowLogin={() => setShowLoginForm(!showLoginForm)}
      />
      {showLoginForm && (
        <Login
          setUserInfo={setUserInfo}
          loginOff={() => setShowLoginForm(!showLoginForm)}
        />
      )}
      {(userInfo.length > 0 && showNewTrick) && <AddTrick userInfo = {userInfo}/>}
      {(userInfo.length > 0) && <UserDash userInfo = {userInfo}/>}
    </div>
  );
}

export default App;

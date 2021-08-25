import Header from "./components/Header";
import AddTrick from "./components/AddTrick";
import Login from "./components/Login";
import UserDash from "./components/UserDash"
import { useState } from "react";
import React from "react";

function App() {
  const [showNewTrick, setShowNewTrick] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [trickRefresh, setTrickRefresh] = useState(false);

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
      {(userInfo.length > 0 && showNewTrick) && <AddTrick userInfo = {userInfo} trickMenu = {() => setShowNewTrick(!showNewTrick)} setRefresh={() => setTrickRefresh(!trickRefresh)}/>}
      {(userInfo.length > 0) && <UserDash userInfo = {userInfo} refresh = {trickRefresh} setRefresh={() => setTrickRefresh(!trickRefresh)}/>}
    </div>
  );
}

export default App;

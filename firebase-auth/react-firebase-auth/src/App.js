import React, { useState } from "react";
import LoginButton from "./components/LoginButton";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? (
        <WelcomeScreen user={user} setUser={setUser} />
      ) : (
        <LoginButton setUser={setUser} />
      )}
    </div>
  );
}

export default App;

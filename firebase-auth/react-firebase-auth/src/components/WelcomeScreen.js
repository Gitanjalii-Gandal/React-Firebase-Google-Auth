import React from "react";
import { auth, signOut } from "../firebase";

const WelcomeScreen = ({ user, setUser }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="User profile" />
      <br></br>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default WelcomeScreen;

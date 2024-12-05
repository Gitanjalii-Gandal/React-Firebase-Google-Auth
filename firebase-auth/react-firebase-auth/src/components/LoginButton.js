import React from "react";
import { auth, provider, signInWithPopup } from "../firebase";

const LoginButton = ({ setUser }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser({
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return <button onClick={handleLogin}>Log in with Google</button>;
};

export default LoginButton;

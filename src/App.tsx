// src/App.tsx
import React, { useState } from "react";
import { signUp, logIn, logOut } from "./authService";

const App: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const result = await signUp(email, password);
    console.log("Sign Up Result:", result);
  };

  const handleLogIn = async () => {
    const result = await logIn(email, password);
    console.log("Log In Result:", result);
  };

  const handleLogOut = async () => {
    const result = await logOut();
    console.log("Log Out Result:", result);
  };

  return (
    <div>
      <h1>Firebase Authentication</h1>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogIn}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default App;

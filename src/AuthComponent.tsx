// src/AuthComponent.tsx
import React, { useState } from 'react';
import { signUp, logIn, logOut } from './authService';

const AuthComponent: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<any>(null);

  const handleSignUp = async () => {
    const success = await signUp(email, password);
    if (success) {
      // Handle success, e.g., redirect to a different page
    }
  };

  const handleLogIn = async () => {
    const success = await logIn(email, password);
    if (success) {
      // Handle success, e.g., redirect to a different page
    }
  };

  const handleLogOut = async () => {
    const success = await logOut();
    if (success) {
      // Handle success, e.g., redirect to a different page
    }
  };

  return (
    <div>
      <h2>Authentication</h2>
      {user ? (
        <>
          <p>Welcome, {user.email}!</p>
          <button onClick={handleLogOut}>Log Out</button>
        </>
      ) : (
        <>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSignUp}>Sign Up</button>
          <button onClick={handleLogIn}>Log In</button>
        </>
      )}
    </div>
  );
};

export default AuthComponent;

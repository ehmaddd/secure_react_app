import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp, logIn, logOut } from './authService';
import { setUser, clearUser } from './redux/actions/authActions';
import { useNavigate } from 'react-router-dom';


const AuthComponent: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user);

  const [email, setEmail] = useState<string>(''); // Add this line
  const [password, setPassword] = useState<string>(''); // Add this line

  const handleSignUp = async () => {
    const success = await signUp(email, password);
    if (success) {
      dispatch(setUser({ email }));
    }
  };

  const handleLogIn = async () => {
    const success = await logIn(email, password);
    if (success) {
      dispatch(setUser({ email }));
      navigate('/dashboard');
    }
  };

  const handleLogOut = async () => {
    const success = await logOut();
    if (success) {
      dispatch(clearUser());
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

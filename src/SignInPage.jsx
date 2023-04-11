import React, { useState } from 'react';
import './SignInPage.css';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    // TODO: add sign in functionality
    console.log('Sign in clicked');
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // TODO: add forgot password functionality
    console.log('Forgot password clicked');
  };

  return (
    
    <div className='page'>
      <div className="disp">
         <p className='title'>JALA Academy</p>
         <p className="log_cred">Login Credentials</p>
         <p className="cred">Email : abdul@jalaacademy.com</p>
         <p className="cred">Password : abc@12345</p>
         <p className="note">Learn Everything on Real-Time Scenarios</p>
      </div>
      <div className="SIP">
      <p className='si'>Sign In</p>
      <form onSubmit={handleSignIn}>
        <label>
          Email:
          <input className='crd' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Password:
          <input className='crd' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <label>
          <input className='rm' type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
          Remember Me
        </label>
        <br />
        <button className='sib' type="submit">Sign In</button>
        <br />
        <p className="or">OR</p>
        <button className='fp' onClick={() => setShowForgotPassword(true)}>Forgot password</button>
      </form>
      {showForgotPassword && (
        <form onSubmit={handleForgotPassword}>
          <label>
            Email:
            <input type="email" required />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
      </div>
    </div>
  );
};

export default SignInPage;

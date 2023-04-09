import React, { useState } from 'react';

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
         <h1>JALA Academy</h1>
         <h3 className="log_cred">Login Credentials</h3>
         <p className="email">Email : abdul@jalaacademy.com</p>
         <p className="password">Password : abc@12345</p>
         <p className="note">Learn Everything on Real-Time Scenarios</p>
      </div>
      <div className="SIP">
      <p>Sign In</p>
      <form onSubmit={handleSignIn}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <label>
          <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
          Remember me
        </label>
        <br />
        <button type="submit">Sign In</button>
        <br />
        <button onClick={() => setShowForgotPassword(true)}>Forgot password</button>
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

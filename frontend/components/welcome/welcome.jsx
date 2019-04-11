import React from 'react';
import { Link, Redirect } from 'react-router-dom';





const Welcome = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      {/* <Link to="/splash" /> */}
    </nav>
  );

  // const handleClick = () => {
  //   return(
  //   logout
  //   )
  // }

  const personalWelcome = () => (
    <section className="personal-container">
      <span className="welcome-user">Welcome, {currentUser.username}!</span>
      <button className="submit-button" onClick={logout}>Log Out</button>
    </section>
  );

  return currentUser ? personalWelcome() : sessionLinks();
};


export default Welcome;

import React from 'react';

import LoginButton from './LoginButton.js';
import LogoutButton from './LogoutButton.js';
//import SignupButton from './signup-button';

import { useAuth0 } from '@auth0/auth0-react';



const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
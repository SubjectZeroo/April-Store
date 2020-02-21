import React from 'react';


import {SignInAndSignUp} from './sign-in-and-sign-up.styles'
import SignIn from '../../components/sign-in/sign-in.component'

import SignUp from '../../components/sign-up/sign-up.component'
const SignInAndSignUpPage = () => (
  <SignInAndSignUp>
   <SignIn></SignIn>
   <SignUp></SignUp>
  </SignInAndSignUp>
);

export default SignInAndSignUpPage;
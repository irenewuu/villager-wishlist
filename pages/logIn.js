import React from "react";
import styled from "styled-components";
import Button from "../comps/Button";
import Link from "next/link";
import {useRouter} from 'next/router';
import { v4 as uuidv4 } from "uuid";
import AuthLogIn from "../comps/AuthLogIn"

import {withRouter} from 'react-router-dom';

import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signInWithRedirect
} from "firebase/auth";
import { useEffect } from "react";
import { Route, Redirect } from 'react-router'

const firebaseConfig = {
  apiKey: "AIzaSyCHAc6ZocmhVTPrXfGsoziKsoaRBJk0g-Y",
  authDomain: "animal-crossing-10520.firebaseapp.com",
  projectId: "animal-crossing-10520",
  storageBucket: "animal-crossing-10520.appspot.com",
  messagingSenderId: "463468343690",
  appId: "1:463468343690:web:c323acea2b92253fee1873",
  measurementId: "G-77B805BS4J",
};

const Background = styled.div`
  background-color: #def1ee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Photo = styled.img`
  margin-bottom: 48px;
`;

const TextInput = styled.input`
  box-sizing: border-box;
  color: #8d8d8d;
  width: 275px;
  height: 50px;
  background-color: #f9f9f9;
  border-radius: 10px;
  border: none;
  padding-left: 16px;

  ::placeholder {
    color: #8d8d8d;
  }
  :focus {
    outline: none;
  }
`;

const RowGap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`;
const RowGap2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 27px;
`;
const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`;

const Signup = styled.p`
  color: #8d8d8d;
`;

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default function LogIn() {

  const router = useRouter();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        console.log("signed in", user);
        router.push(`/wishlist/${uuidv4()}`)

      } else {
        console.log("signed out");
        
      }
    });
  }, []);

  const SignInGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    // signInWithRedirect(auth, provider);
    
  };

  return (
    <Background>
      <Photo src="/villager-wishlist.svg" />

      <MainCont>
        <AuthLogIn />
        <RowGap2>
          <Button
            display="block"
            width="275"
            text="Continue with Google"
            fontSize="26"
            onClick={SignInGoogle}
          />
          <Signup>
            Don&#39;t have an account? <Link href="signup">Sign Up</Link>
          </Signup>
        </RowGap2>
      </MainCont>
    </Background>
  );
}

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import ax from "axios";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

import AuthLogIn from "../comps/AuthLogIn";
import Button from "../comps/Button";

import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHAc6ZocmhVTPrXfGsoziKsoaRBJk0g-Y",
  authDomain: "animal-crossing-10520.firebaseapp.com",
  projectId: "animal-crossing-10520",
  storageBucket: "animal-crossing-10520.appspot.com",
  messagingSenderId: "463468343690",
  appId: "1:463468343690:web:c323acea2b92253fee1873",
  measurementId: "G-77B805BS4J",
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default function LogIn() {
  const router = useRouter();
  // useEffect(() => {
    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     console.log("signed in", user);
    //     router.push(`/wishlist/${uuidv4()}`)
    //   } else {
    //     console.log("signed out");
    //   }
    // });
  // }, []);

  const SignInGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    
    console.log(result);
    // signInWithRedirect(auth, provider);
    const newUser = {
      name: result.user.displayName,
      email: result.user.email,
      password: result.user.email,
    };
    console.log("newUser:", newUser);
    
    try {
      let res = await ax.post("http://localhost:3000/signup", newUser);
      
      console.log("token:", res.data);
      localStorage.setItem("token", res.data);
      router.push(`/wishlist/${res.data}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="BackgroundCont">
      <img src="/villager-wishlist.svg" className="LoginImg" />

      <div id="MainCont">
        <AuthLogIn />
        <div className="RowGap">
          <Button
            display="block"
            width="275"
            text="Continue with Google"
            fontSize="26"
            textHover="none"
            onClick={SignInGoogle}
          />
          <p className="SignUpLink">
            Don&#39;t have an account? <Link href="signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

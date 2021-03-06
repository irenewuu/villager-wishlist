import React, { useEffect } from "react";
import { useRouter } from "next/router";
import ax from "axios";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

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

export default function LogIn() {
  const router = useRouter();

  // login with google account
  const SignInGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
  
    const newUser = {
      name: result.user.displayName,
      email: result.user.email,
      password: result.user.email,
    };
    // console.log("newUser:", newUser);
    
    try {
      let res = await ax.post("https://villager-wishlist.herokuapp.com/signup", newUser);
      localStorage.setItem("token", res.data);
      router.push(`/wishlist`);
    } catch (e) {
      console.log(e, " error");
    }
  };

  const LoginImg = styled.img`
    margin-bottom: 48px;
  `;

  return (
    <div className="BackgroundCont">
      <LoginImg src="/villager-wishlist.svg" alt="ACNH Villager Wishlist image" />

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

// FirebaseProvider.js
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup,onAuthStateChanged } from "firebase/auth";

import app from './Firebaseconfig';

export const FirebaseContext = createContext();  // eska kaam ka storage banana bss 



const FirebaseProvider = (props) => {

  const GoogleProvider = new GoogleAuthProvider();
  const EmailandPassword = (email, password) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };



 const LoginEmailandPasssword=(email,password)=>{
  const auth = getAuth(app);
  signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    console.log("success")
  })
  .catch((error) => {
console.log(error)
  });
 }

 const SignWithGoogle=()=>{
  const auth = getAuth(app);
signInWithPopup(auth, GoogleProvider)
  .then(() => {
  console.log('succes')
  }).catch((error) => {
    console.log(error)
  });

 }


const[user,setuser]=useState(null)

useEffect(()=>{
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) setuser(user)
    else setuser(null )
  })
},[])

const isLogin= user? true:false 

  return (
 //   <FirebaseContext.Provider value={{ putdata: EmailandPassword }}>
    <FirebaseContext.Provider value={{ EmailandPassword,LoginEmailandPasssword,SignWithGoogle,isLogin }}>
   
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;

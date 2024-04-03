// FirebaseProvider.js
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup,onAuthStateChanged } from "firebase/auth";
import { getFirestore,collection,addDoc, Firestore } from "firebase/firestore"; // also data store
import {getStorage,ref, uploadBytes} from 'firebase/storage'  // here data store means we upload our data to firestorage of storage means storage
import app from './Firebaseconfig';


export const FirebaseContext = createContext();  // eska kaam ka storage banana bss 



const FirebaseProvider = (props) => {

  const db = getFirestore(app);
const storage=getStorage(app);


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
console.log(user)
const HandleCreateNewListing=async(name,isbn,price,cover)=>{
const imageRef=ref(storage,`uploads/images/${Date.now()}-${cover.name}`)  // with date it show some unique data  uploade imge file
const uploadResult=await uploadBytes(imageRef,cover)  // now image is uploaded  now i want my  should be inside firestore to mange data for this  import collection in  the firestore and  addDoc also

return await addDoc(collection(db,'books'),{
  name,
  isbn,
  price,
  imageURL:uploadResult.ref.fullPath,
  userID:user.uid,
  userEmail:user.email,
  displayName:user.displayName,
  photoURL:user.photoURL
})
}


  return (
 //   <FirebaseContext.Provider value={{ putdata: EmailandPassword }}>
    <FirebaseContext.Provider value={{ EmailandPassword,LoginEmailandPasssword,SignWithGoogle,isLogin,HandleCreateNewListing }}>
   
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;

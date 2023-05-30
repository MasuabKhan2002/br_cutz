import { useEffect } from "react";
import { auth } from './config.js';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate, Outlet } from 'react-router-dom';
import Navbar from "../components/navbar.js";

async function SignOut() {
  await signOut(auth);
};

function LogInAuth(email, password) {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

function RequireAuth() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(!user) navigate("/login");
      else return;
    })
    
    unsubscribe();
  });
  return (
    <>
      <Navbar/>
      <div id="detail"><Outlet/></div>
    </>
  );
};

export {LogInAuth, RequireAuth, SignOut};
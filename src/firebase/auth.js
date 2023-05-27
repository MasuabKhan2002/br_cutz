import React, { useEffect } from "react";
import { auth } from './config.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";

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
}

function RequireAuth({ children }) {
  const [user, loading] = useAuthState(auth);
  
  useEffect(() => {
    if (loading) return;
    console.log(user);
    if (!user) return <Navigate to="/login"/>;
  }, [user, loading]);
  return children;
}


export {LogInAuth, RequireAuth};
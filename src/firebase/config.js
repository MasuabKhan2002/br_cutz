// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC7Nju-3Tw8VH3mAaTkzOFvxG6drXGI5FU",
  authDomain: "br-cuts.firebaseapp.com",
  projectId: "br-cuts",
  storageBucket: "br-cuts.appspot.com",
  messagingSenderId: "426864670191",
  appId: "1:426864670191:web:009ef37eafe251491f321a",
  measurementId: "G-N0QT404QCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth };
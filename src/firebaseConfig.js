// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBu3BOp3K4f4lp7ruHWheqOJtUsNRz_YJs",
  authDomain: "react-josueloza.firebaseapp.com",
  projectId: "react-josueloza",
  storageBucket: "react-josueloza.appspot.com",
  messagingSenderId: "285310367161",
  appId: "1:285310367161:web:aa90ac95b396361f643268",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

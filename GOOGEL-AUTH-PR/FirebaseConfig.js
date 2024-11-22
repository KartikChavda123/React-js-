// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxi0hfAI9_h9zMy-ExMPGOe3_3a0dhfHE",
  authDomain: "auth-pr-7dad4.firebaseapp.com",
  projectId: "auth-pr-7dad4",
  storageBucket: "auth-pr-7dad4.firebasestorage.app",
  messagingSenderId: "651047659616",
  appId: "1:651047659616:web:af1f4cd7faee7e3e447b05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const owner = new GoogleAuthProvider

export {auth,owner};
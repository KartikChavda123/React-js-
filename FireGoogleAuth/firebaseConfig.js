// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1SAt7VX0tKQi7tgj6MqRifHysBwniBFI",
  authDomain: "fir-auth-be106.firebaseapp.com",
  projectId: "fir-auth-be106",
  storageBucket: "fir-auth-be106.firebasestorage.app",
  messagingSenderId: "569901271901",
  appId: "1:569901271901:web:b433ecb4a712c9ca51f6b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider

export {auth,provider};
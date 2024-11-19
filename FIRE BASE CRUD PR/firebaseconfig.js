// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from  "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDi3kBCmzqudTOA24e1dnPUBhAEscWdJwI",
  authDomain: "react2-c7769.firebaseapp.com",
  projectId: "react2-c7769",
  storageBucket: "react2-c7769.firebasestorage.app",
  messagingSenderId: "895463367202",
  appId: "1:895463367202:web:a0f4247707b7f51112a07b",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
export {auth , db}
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAV1faxznBBR1Y0weud0yZ3KT0_6cCq9Kg",
  authDomain: "sign-up-sign-in-cdbeb.firebaseapp.com",
  projectId: "sign-up-sign-in-cdbeb",
  storageBucket: "sign-up-sign-in-cdbeb.firebasestorage.app",
  messagingSenderId: "806164387474",
  appId: "1:806164387474:web:6a5043554d25438169b84b",
  measurementId: "G-704JJ5YS66"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
export {auth , db}
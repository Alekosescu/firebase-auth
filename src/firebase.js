// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyK2DgsGqUnHej6T3NfjsTYxYFMRhbmdU",
  authDomain: "react-fb-auth-d28d6.firebaseapp.com",
  projectId: "react-fb-auth-d28d6",
  storageBucket: "react-fb-auth-d28d6.appspot.com",
  messagingSenderId: "40549175643",
  appId: "1:40549175643:web:534b221b1ebfcfd9bb4a7e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

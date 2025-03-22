// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBAH3QM3v9HdrYvSwR0u4j4-hYndnfIXc",
  authDomain: "netflixgpt-3e12a.firebaseapp.com",
  projectId: "netflixgpt-3e12a",
  storageBucket: "netflixgpt-3e12a.firebasestorage.app",
  messagingSenderId: "487590070730",
  appId: "1:487590070730:web:a367d2251cdc560c352733",
  measurementId: "G-2FLL6NG1GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
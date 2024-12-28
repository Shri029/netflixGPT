// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD5xeRPfUUVw2SjURugpVav1MR9t3Rcq0",
  authDomain: "netflixgpt-2e9e6.firebaseapp.com",
  projectId: "netflixgpt-2e9e6",
  storageBucket: "netflixgpt-2e9e6.firebasestorage.app",
  messagingSenderId: "935832319560",
  appId: "1:935832319560:web:3172864b4c79535d674a7d",
  measurementId: "G-TN6REF27R8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
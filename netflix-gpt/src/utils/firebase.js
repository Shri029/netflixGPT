// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5JUyDXKVXTifdp--OXMqfQ8aTke5jXbE",
  authDomain: "netflixgpt-c3501.firebaseapp.com",
  projectId: "netflixgpt-c3501",
  storageBucket: "netflixgpt-c3501.firebasestorage.app",
  messagingSenderId: "963479464476",
  appId: "1:963479464476:web:f332092ffe0f48f9e74dd9",
  measurementId: "G-YS4MV1XS2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
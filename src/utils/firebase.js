// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXXDZwkLQCs22g1lDA_U5DFnjjoVAYWQc",
  authDomain: "netflixgpt-88756.firebaseapp.com",
  projectId: "netflixgpt-88756",
  storageBucket: "netflixgpt-88756.firebasestorage.app",
  messagingSenderId: "105674151276",
  appId: "1:105674151276:web:e2c3b3dd6b733a3a858f49",
  measurementId: "G-VP3TF9LJPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
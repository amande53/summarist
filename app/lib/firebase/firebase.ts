// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgI_SHYqzEHQMZS3MjvIHf2kpeCBv_3T4",
  authDomain: "summarist-4169a.firebaseapp.com",
  projectId: "summarist-4169a",
  storageBucket: "summarist-4169a.firebasestorage.app",
  messagingSenderId: "639368221721",
  appId: "1:639368221721:web:a1f3cb1263935c07820688",
  measurementId: "G-LWCZ0CC1W6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

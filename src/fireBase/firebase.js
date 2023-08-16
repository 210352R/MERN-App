// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwzBz0qGRbS-CKjoUGR86XYmve9hM5OuY",
  authDomain: "mern-app-72bfb.firebaseapp.com",
  projectId: "mern-app-72bfb",
  storageBucket: "mern-app-72bfb.appspot.com",
  messagingSenderId: "673232345826",
  appId: "1:673232345826:web:cb2ab7f345935be7905cbb",
  measurementId: "G-SBJE8GRLXD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

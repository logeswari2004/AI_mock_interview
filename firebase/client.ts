// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGWMl_58WlnNggKk130ShnyUb96iYevtg",
  authDomain: "logeswari-elango.firebaseapp.com",
  projectId: "logeswari-elango",
  storageBucket: "logeswari-elango.firebasestorage.app",
  messagingSenderId: "206989160321",
  appId: "1:206989160321:web:69422a9f168e28cfa6c280",
  measurementId: "G-L9SF28BM7Z"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
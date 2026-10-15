// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyns6Wog0SOv6kI-SiZJZ9HUnFLwtSPBs",
  authDomain: "biblioteca-ibarsduna.firebaseapp.com",
  projectId: "biblioteca-ibarsduna",
  storageBucket: "biblioteca-ibarsduna.firebasestorage.app",
  messagingSenderId: "1076305143058",
  appId: "1:1076305143058:web:8f7c86867e672e0a00ffcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7q9dDSeSXr9KfAbA9CL0zy6-7zBoop_w",
  authDomain: "parkease-login-e90c0.firebaseapp.com",
  databaseURL: "https://parkease-login-e90c0-default-rtdb.firebaseio.com",
  projectId: "parkease-login-e90c0",
  storageBucket: "parkease-login-e90c0.appspot.com",
  messagingSenderId: "489249405557",
  appId: "1:489249405557:web:7b12bbcee11ebf1691963c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAyZC2TI5hmR4CGbrSYeLn0aVwVzNgyGU",
    authDomain: "diwali-shop.firebaseapp.com",
    projectId: "diwali-shop",
    storageBucket: "diwali-shop.appspot.com",
    messagingSenderId: "297524140667",
    appId: "1:297524140667:web:24e2a473abfc67ebc660de"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

// Export auth and other functions
export { auth, provider, signInWithPopup, signOut, onAuthStateChanged };

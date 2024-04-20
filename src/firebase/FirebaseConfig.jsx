// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_EaxMTeC6PhpSJFchVgxwXRwmDE1Ulig",
  authDomain: "comuner-blog.firebaseapp.com",
  projectId: "comuner-blog",
  storageBucket: "comuner-blog.appspot.com",
  messagingSenderId: "675474769971",
  appId: "1:675474769971:web:664f80c1dfaa8b12067b46",
  measurementId: "G-G9N1WXNGGE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbnwKAby2H1WToF74aY9rOZt3shzuLJo4",
  authDomain: "pharmacy-management-syst-c5ca1.firebaseapp.com",
  projectId: "pharmacy-management-syst-c5ca1",
  storageBucket: "pharmacy-management-syst-c5ca1.appspot.com",
  messagingSenderId: "1057018925554",
  appId: "1:1057018925554:web:8b64afeb69396272fa5b6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
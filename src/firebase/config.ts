// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMialB2WNG4M5puaeVYyfWvMi4cZ8GyVI",
  authDomain: "skill-sheet-b60e1.firebaseapp.com",
  projectId: "skill-sheet-b60e1",
  storageBucket: "skill-sheet-b60e1.appspot.com",
  messagingSenderId: "195983209813",
  appId: "1:195983209813:web:d3e9c4fcb810c519fc2bdc",
  measurementId: "G-Y6M8621QD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db }
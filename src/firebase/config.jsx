
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-heOenXjZHIbNGTe5J1IIHiGxKrDyo40",
  authDomain: "miniblog-37602.firebaseapp.com",
  projectId: "miniblog-37602",
  storageBucket: "miniblog-37602.firebasestorage.app",
  messagingSenderId: "1008713788955",
  appId: "1:1008713788955:web:67b7bb89ebe0ab236612be",
  measurementId: "G-STWJBW4GMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };
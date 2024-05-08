import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Import the getAuth function for Firebase Authentication

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAdqb8_-iZQWPa0Ya3swEz9H-fm47Fznts",
  authDomain: "cloneolx-231e0.firebaseapp.com",
  projectId: "cloneolx-231e0",
  storageBucket: "cloneolx-231e0.appspot.com",
  messagingSenderId: "13430264613",
  appId: "1:13430264613:web:d9446d654bd3985f1700cc",
  measurementId: "G-0K89V6LL4K"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app); // Initialize Firebase Authentication

export { app as Firebase, firestore as Firestore, auth as FirebaseAuth };

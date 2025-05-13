// utils/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCMBWr4yR6lrltjW4fjbvZr36TSl5VmOKA",
  authDomain: "realestate-57f9c.firebaseapp.com",
  projectId: "realestate-57f9c",
  storageBucket: "realestate-57f9c.appspot.com",
  messagingSenderId: "173659855242",
  appId: "1:173659855242:web:12a6108fee4f08549c1073",
  measurementId: "G-CFPE6P6DD9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app); // Initialize Firestore

export { auth, provider, signInWithPopup, db }; // Export Firestore as well

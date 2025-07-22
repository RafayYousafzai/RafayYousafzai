import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCXLun3tYPIvDLWll9qHJpi2gPAMi7B5y4",
  authDomain: "portfolio-c4bc7.firebaseapp.com",
  projectId: "portfolio-c4bc7",
  storageBucket: "portfolio-c4bc7.appspot.com",
  messagingSenderId: "537304333679",
  appId: "1:537304333679:web:e347381c998c1a355efc9a",
  measurementId: "G-203DQQLFWK",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };

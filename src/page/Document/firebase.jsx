// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDiWddr5qpG2x3W-FrIkAqYXRplsQiRmVg",
  authDomain: "storage-21a5b.firebaseapp.com",
  projectId: "storage-21a5b",
  storageBucket: "storage-21a5b.appspot.com",
  messagingSenderId: "762769525327",
  appId: "1:762769525327:web:420cfb17b2b5623861b83a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB81RUWvN8BLDvhd28ZDfhAi9TehPfeBeQ",
    authDomain: "olcha-a6d1f.firebaseapp.com",
    projectId: "olcha-a6d1f",
    storageBucket: "olcha-a6d1f.appspot.com",
    messagingSenderId: "660156960071",
    appId: "1:660156960071:web:10d5b43d06ccc3e56f5062",
    measurementId: "G-03X42F6VQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export const firestore = getFirestore()

export default firestore




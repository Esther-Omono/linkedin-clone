import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBnau8PkfuxMK624YyMoCT-PJcLpapN9sg",
    authDomain: "linkedin-clone-fa377.firebaseapp.com",
    projectId: "linkedin-clone-fa377",
    storageBucket: "linkedin-clone-fa377.appspot.com",
    messagingSenderId: "258541326194",
    appId: "1:258541326194:web:92f66fe69fd7384e4ed7eb"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

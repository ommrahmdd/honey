import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB-lFKz_EczC1Lyxi69vb4fVegDLwRj3G4",
  authDomain: "honey-bee-website.firebaseapp.com",
  projectId: "honey-bee-website",
  storageBucket: "honey-bee-website.appspot.com",
  messagingSenderId: "880127536209",
  appId: "1:880127536209:web:aeec4307b1ae17eb839c70",
};

let app = initializeApp(firebaseConfig);
export let db = getFirestore(app);
export let auth = getAuth(app);
export let storage = getStorage(app);

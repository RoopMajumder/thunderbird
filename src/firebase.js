import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyACQHIegZDzsGjcul37Twy0tSoquIaxg_o",

  authDomain: "thunderbird-5e3f0.firebaseapp.com",

  projectId: "thunderbird-5e3f0",

  storageBucket: "thunderbird-5e3f0.appspot.com",

  messagingSenderId: "966945094900",

  appId: "1:966945094900:web:66898fd5154ce7bb65f2a1",

  measurementId: "G-WWX8J6JXX3"

};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

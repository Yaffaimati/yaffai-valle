import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBhxs3C14_MkwIbx7gZFeiUH-lLkkXeqYU",
  authDomain: "yaffai-vallle.firebaseapp.com",
  projectId: "yaffai-vallle",
  storageBucket: "yaffai-vallle.appspot.com",
  messagingSenderId: "875044130605",
  appId: "1:875044130605:web:3480f76e92b7aabc368da4"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore (app); 
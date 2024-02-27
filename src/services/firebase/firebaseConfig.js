
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCvXf_bL6yzTexvXm_f8XHrUXimCk5mW5I",
  authDomain: "test-coderhouse-6e70a.firebaseapp.com",
  projectId: "test-coderhouse-6e70a",
  storageBucket: "test-coderhouse-6e70a.appspot.com",
  messagingSenderId: "335812549846",
  appId: "1:335812549846:web:076161621cd41a01c63d77"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
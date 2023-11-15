import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDleJGf66gfWYQOeaEh_UvT_DGqVD-djoE",
  authDomain: "chatgpt-clone-d0631.firebaseapp.com",
  projectId: "chatgpt-clone-d0631",
  storageBucket: "chatgpt-clone-d0631.appspot.com",
  messagingSenderId: "91680458020",
  appId: "1:91680458020:web:6bcb69c7cc5ad41f5e9fb1",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

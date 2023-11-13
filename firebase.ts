import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDexw86dY00rLBxJy7rHiKqxnfvu5XiZq4",
  authDomain: "chatgpt-clone-4f176.firebaseapp.com",
  projectId: "chatgpt-clone-4f176",
  storageBucket: "chatgpt-clone-4f176.appspot.com",
  messagingSenderId: "506109129266",
  appId: "1:506109129266:web:23a046c739365fb562022b",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

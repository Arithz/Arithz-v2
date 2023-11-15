import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7-mgXN9Xml16ezJ_gWxKijmbX1mElnPw",
  authDomain: "arithz-portfolio.firebaseapp.com",
  projectId: "arithz-portfolio",
  storageBucket: "arithz-portfolio.appspot.com",
  messagingSenderId: "399721775001",
  appId: "1:399721775001:web:c93b9ea48bf0ffd084dd08",
  measurementId: "G-3BGYLL28M2",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

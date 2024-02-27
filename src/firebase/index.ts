import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
import { getAuth } from "@firebase/auth";
import { getStorage } from "@firebase/storage";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBMJm6J6WfADwWAqSjee2iX_-mGiR_uzNI",
  authDomain: "viqumoweb.firebaseapp.com",
  projectId: "viqumoweb",
  storageBucket: "viqumoweb.appspot.com",
  messagingSenderId: "319318396270",
  appId: "1:319318396270:web:1d6a15f331090fb3a3857f",
  measurementId: "G-0KSJK1FRBB"
};
  
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

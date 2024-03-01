// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrzu5ZbeYWKrL1b9hYSHRlEHUD5cbKf_U",
  authDomain: "sai-netflix.firebaseapp.com",
  projectId: "sai-netflix",
  storageBucket: "sai-netflix.appspot.com",
  messagingSenderId: "1008710884801",
  appId: "1:1008710884801:web:9c9f4bde656c4c3176e340",
  measurementId: "G-PNJRLSW4H7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNWD9nEk_wqBifI2nqltfzrTUZh9GpOFA",
  authDomain: "resume-builder-66bb0.firebaseapp.com",
  projectId: "resume-builder-66bb0",
  storageBucket: "resume-builder-66bb0.appspot.com",
  messagingSenderId: "802395145074",
  appId: "1:802395145074:web:fc4cf398227ea65c7fd3eb",
  measurementId: "G-TCP9BLJSJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
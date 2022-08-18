// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS0bqjfI2bXmesGWk7kigRdTg5YPtSll8",
  authDomain: "car-doctor-f5375.firebaseapp.com",
  projectId: "car-doctor-f5375",
  storageBucket: "car-doctor-f5375.appspot.com",
  messagingSenderId: "348910964054",
  appId: "1:348910964054:web:e2f7c15abb9839de461af7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;
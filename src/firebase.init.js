// Import the functions you need from the SDKs you need
import { initializeApp,getAuth } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0ll5sx6DlbSIVq0su0xjX0PpInR1clrg",
  authDomain: "car-doctor-663a5.firebaseapp.com",
  projectId: "car-doctor-663a5",
  storageBucket: "car-doctor-663a5.appspot.com",
  messagingSenderId: "562284356363",
  appId: "1:562284356363:web:9456837f08ea2c5633f80e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;
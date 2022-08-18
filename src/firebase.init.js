// Import the functions you need from the SDKs you need
import { initializeApp,getAuth } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_KEY_apiKey,
  authDomain:process.env.REACT_KEY_authDomain,
  projectId:process.env.REACT_KEY_projectId, 
  storageBucket:process.env.REACT_KEY_storageBucket, 
  messagingSenderId:process.env.REACT_KEY_messagingSenderId,
  appId:process.env.REACT_KEY_appId=1, 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVJXz3z5yyM_ZNqV-SDTTOy8HsI-rwPD0",
  authDomain: "ema-john-react-722a8.firebaseapp.com",
  projectId: "ema-john-react-722a8",
  storageBucket: "ema-john-react-722a8.appspot.com",
  messagingSenderId: "959375520867",
  appId: "1:959375520867:web:0f98bb093f88c89d4af456"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
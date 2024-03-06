// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl8DJm5mj0bjOm_smnK_iPawpBmtP_kO8",
  authDomain: "mii-foundation.firebaseapp.com",
  projectId: "mii-foundation",
  storageBucket: "mii-foundation.appspot.com",
  messagingSenderId: "137994666619",
  appId: "1:137994666619:web:dd854f87c954f2104858de",
  measurementId: "G-7XT3P3HH0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//for image storage
export const storage=getStorage(app)

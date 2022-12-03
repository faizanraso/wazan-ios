// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfXu-B6ryeokBECK5SGLh_Zw3fRvY2Vs4",
  authDomain: "wazan-96936.firebaseapp.com",
  projectId: "wazan-96936",
  storageBucket: "wazan-96936.appspot.com",
  messagingSenderId: "229235623518",
  appId: "1:229235623518:web:6dbb6bc3539cdffec956cf",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

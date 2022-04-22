// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnqMIV2Tb5iKx3JRmmhurYTrSc-rfE2rc",
  authDomain: "excellent-individual-service.firebaseapp.com",
  projectId: "excellent-individual-service",
  storageBucket: "excellent-individual-service.appspot.com",
  messagingSenderId: "509229185272",
  appId: "1:509229185272:web:cd6144f03b789522e4a30d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
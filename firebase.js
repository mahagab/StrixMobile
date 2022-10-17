// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK9tPO1gtlsAbL-y9K4PQw_1vglgpciFQ",
  authDomain: "strix-sprint.firebaseapp.com",
  projectId: "strix-sprint",
  storageBucket: "strix-sprint.appspot.com",
  messagingSenderId: "430154722949",
  appId: "1:430154722949:web:714b56a96a11c5d5b503ec",
  measurementId: "G-GJQ1D6J6W9"
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };

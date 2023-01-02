import { getDatabase } from 'firebase/database';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWSVaXDrYoxAkjsX3y4U5h69HwHmINNSY",
    authDomain: "react-register-84380.firebaseapp.com",
    databaseURL: "https://react-register-84380-default-rtdb.firebaseio.com",
    projectId: "react-register-84380",
    storageBucket: "react-register-84380.appspot.com",
    messagingSenderId: "651857656013",
    appId: "1:651857656013:web:19827d08a2a6a1f1b3d184",
    measurementId: "G-E1MQLC7G2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);
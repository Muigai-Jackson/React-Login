import { getDatabase } from 'firebase/database';

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
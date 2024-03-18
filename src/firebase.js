import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCcWEaatV6KQErLTyyQL0CcdMEGBnUDBqI",
    authDomain: "proyecto4-4adc7.firebaseapp.com",
    projectId: "proyecto4-4adc7",
    storageBucket: "proyecto4-4adc7.appspot.com",
    messagingSenderId: "875440937733",
    appId: "1:875440937733:web:7f82284f30a418dae7f56c",
    measurementId: "G-8XQWN4V7Z5"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
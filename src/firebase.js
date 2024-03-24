import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAyXSEFz4wHGoOt-Kt8r8oi_q3umR2ZVPw",
    authDomain: "react-social-media-app-ffd7f.firebaseapp.com",
    projectId: "react-social-media-app-ffd7f",
    storageBucket: "react-social-media-app-ffd7f.appspot.com",
    messagingSenderId: "451356359088",
    appId: "1:451356359088:web:66a4a866a320d4e506fe75"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore(); 
export const auth = firebase.auth();



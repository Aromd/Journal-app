import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCYHjlEjDbEXS_DEPW7pOUmgPVYW1yqn7s",
    authDomain: "react-app-cursos-8ef0e.firebaseapp.com",
    projectId: "react-app-cursos-8ef0e",
    storageBucket: "react-app-cursos-8ef0e.appspot.com",
    messagingSenderId: "1012389518534",
    appId: "1:1012389518534:web:7bcae95e0cfe2505bd8bc7"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
};
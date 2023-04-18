import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDLD3YwpBsN68RsMir0omu5TDms2vgwY3g",
    authDomain: "armfood-d0707.firebaseapp.com",
    projectId: "armfood-d0707",
    storageBucket: "armfood-d0707.appspot.com",
    messagingSenderId: "617680328229",
    appId: "1:617680328229:web:55a51902f5c75875c711cc",
    measurementId: "G-HRG1614X4D"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
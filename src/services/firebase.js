import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBuaa5QB6liT2-qtRmf42HkQvlJwzX1FFU",
    authDomain: "challenge11-db93e.firebaseapp.com",
    databaseURL: "https://challenge11-db93e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "challenge11-db93e",
    storageBucket: "challenge11-db93e.appspot.com",
    messagingSenderId: "37227440137",
    appId: "1:37227440137:web:c76b2be4330490ed0df0d8"
};

export default firebase.initializeApp(firebaseConfig)
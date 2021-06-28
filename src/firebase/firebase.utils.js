import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config =
    {
        apiKey: "AIzaSyB89s24anQFH6Av0vOE6GFh3t4NUnw2X3w",
        authDomain: "crwn-db-8692d.firebaseapp.com",
        projectId: "crwn-db-8692d",
        storageBucket: "crwn-db-8692d.appspot.com",
        messagingSenderId: "829395099097",
        appId: "1:829395099097:web:3d69cd4ad7b6a8e3734dc8",
        measurementId: "G-RJ8NCX80PN"
      }
 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore(); 

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account' });

 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;

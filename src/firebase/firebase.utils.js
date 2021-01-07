import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB6OvxrXrnLg04eVa0uifPIa9VqQaIV-Gw",
  authDomain: "crwn-db-d45dd.firebaseapp.com",
  projectId: "crwn-db-d45dd",
  storageBucket: "crwn-db-d45dd.appspot.com",
  messagingSenderId: "90203163578",
  appId: "1:90203163578:web:9bee61a822743615dfeb83",
  measurementId: "G-S9ZLMZBMPS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

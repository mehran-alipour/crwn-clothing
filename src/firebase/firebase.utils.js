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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (err) {
      console.log("error creating user", err.message)
    }
  }

  return userRef;

}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

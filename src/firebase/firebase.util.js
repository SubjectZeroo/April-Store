import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


 
  const config = {
    apiKey: "AIzaSyDD77JlGjR_KiZJbTyT9uTPrid11kHkRkc",
    authDomain: "e-commerce-db-9750a.firebaseapp.com",
    databaseURL: "https://e-commerce-db-9750a.firebaseio.com",
    projectId: "e-commerce-db-9750a",
    storageBucket: "e-commerce-db-9750a.appspot.com",
    messagingSenderId: "404686100420",
    appId: "1:404686100420:web:b50052d209c3cdb273f691",
    measurementId: "G-8PL5XGW7J1"
  };
 

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    }catch(error) {
      console.log('error creando usuario', error.message);
    }
  }

  return userRef;
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
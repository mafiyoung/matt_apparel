import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAEcdrPPdN4pUfd_CnUgfBNNzjOuIDOCKc",
    authDomain: "matts-apparel.firebaseapp.com",
    projectId: "matts-apparel",
    storageBucket: "matts-apparel.appspot.com",
    messagingSenderId: "139986531528",
    appId: "1:139986531528:web:d18783790aaa5c2f93a1fd",
    measurementId: "G-84CML79EKC"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
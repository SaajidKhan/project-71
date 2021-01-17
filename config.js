import firebase from 'firebase';
require("@firebase/firestore")


var firebaseConfig = {
    apiKey: "AIzaSyAKtREzYd7-AjQRSCM6urkCxzkZBeljodo",
    authDomain: "storyhub-2-cf33b.firebaseapp.com",
    projectId: "storyhub-2-cf33b",
    storageBucket: "storyhub-2-cf33b.appspot.com",
    messagingSenderId: "154030728631",
    appId: "1:154030728631:web:14686be0bdd93fd9d27432"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD3qjWd_hwZRe_cogGzbmt7-kIqdiFIJNg",
  authDomain: "whatsapp-clone-af1e3.firebaseapp.com",
  projectId: "whatsapp-clone-af1e3",
  storageBucket: "whatsapp-clone-af1e3.appspot.com",
  messagingSenderId: "980658301415",
  appId: "1:980658301415:web:f162da2f2ef6203fcf7542",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};

export default db;

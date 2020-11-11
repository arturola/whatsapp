import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBnGQ7D23fNyj6dpTmT5rbodXbYvKXiR-Q",
  authDomain: "alatorre-whatsapp.firebaseapp.com",
  databaseURL: "https://alatorre-whatsapp.firebaseio.com",
  projectId: "alatorre-whatsapp",
  storageBucket: "alatorre-whatsapp.appspot.com",
  messagingSenderId: "433317312163",
  appId: "1:433317312163:web:a1ff962c66b4a713ab3116",
  measurementId: "G-XFLFP8ETQQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

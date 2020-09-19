import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCrT2mQVL1gwOTlFZLKZUQ4P4P6Hh-ChiQ",
  authDomain: "instagram-clone-ce809.firebaseapp.com",
  databaseURL: "https://instagram-clone-ce809.firebaseio.com",
  projectId: "instagram-clone-ce809",
  storageBucket: "instagram-clone-ce809.appspot.com",
  messagingSenderId: "856727888888",
  appId: "1:856727888888:web:cbd423497f443352afec0d",
  measurementId: "G-8KZMZDGWJD",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

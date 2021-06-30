import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCYjPrz72R-BRJ0VyK_LhBWwZ1oatmm8Cc",
  authDomain: "clone-2a02c.firebaseapp.com",
  databaseURL: "https://clone-2a02c-default-rtdb.firebaseio.com",
  projectId: "clone-2a02c",
  storageBucket: "clone-2a02c.appspot.com",
  messagingSenderId: "687634600128",
  appId: "1:687634600128:web:1b7aa14b8ecad884261d25",
  measurementId: "G-BV4PQ2J9GX"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
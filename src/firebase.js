import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAS1NA63Td3LR5qL3RNu8PJ8R_ipPP_ax4",
  authDomain: "netflix-cole-6d469.firebaseapp.com",
  projectId: "netflix-cole-6d469",
  storageBucket: "netflix-cole-6d469.appspot.com",
  messagingSenderId: "991973055150",
  appId: "1:991973055150:web:23787b36ef2d3624842b3f",
  measurementId: "G-6LNZXZGR79",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export const authentication = firebase.auth();

export default db;

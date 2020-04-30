import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDpgYDSg9pQEHpW151xBcud57Rag-V5iS8",
  authDomain: "school11b.firebaseapp.com",
  databaseURL: "https://school11b.firebaseio.com",
  projectId: "school11b",
  storageBucket: "school11b.appspot.com",
  messagingSenderId: "900167885724",
  appId: "1:900167885724:web:5aafd64f139ebd4f3b1e59",
  measurementId: "G-FS0KMY4CFR"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };

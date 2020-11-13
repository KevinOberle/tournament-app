import * as firebase from "firebase";
import { firebaseConfig } from "./firebaseConfig";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
import "firebase/storage";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

var db = firebase.firestore();

export { firebase, db };

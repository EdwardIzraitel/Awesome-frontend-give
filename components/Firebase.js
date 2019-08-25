import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAiPksan3FmYjER2q27oy0rf5CMm7P1uDA",
  authDomain: "give-base.firebaseapp.com",
  databaseURL: "http://give-base.firebaseio.com",
  storageBucket: "give-base.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

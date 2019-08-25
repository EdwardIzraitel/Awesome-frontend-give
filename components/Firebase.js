import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDnLJGs1yUbcGOaJ92xLoanFj1y3X6bU9Q",
  authDomain: "givebasef.firebaseapp.com",
  databaseURL: "http://givebasef.firebaseio.com",
  storageBucket: "givebasef.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

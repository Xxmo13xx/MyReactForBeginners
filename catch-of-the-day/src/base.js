import Rebase from're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCRsK4iaj48v9zoir5-70qASN9XBnI3sRY",
  authDomain: "catch-of-the-day-willie.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-willie.firebaseio.com",
  });

  const base = Rebase.createClass(firebaseApp.database());

// This is a named export.
  export {firebaseApp};

// this is a default export.
  export default base;

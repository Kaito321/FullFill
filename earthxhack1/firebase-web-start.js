 import * as firebase from 'firebase';
  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "apiKey",
    authDomain: "lasquarantinas.firebaseapp.com",
    databaseURL: "https://lasquarantinas.firebaseio.com/",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
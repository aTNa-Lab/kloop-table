import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDRhaklmVogc4wWVlf6MWMUS0gpMccfn0I",
    authDomain: "atna-lab.firebaseapp.com",
    databaseURL: "https://atna-lab.firebaseio.com",
    projectId: "atna-lab",
    storageBucket: "atna-lab.appspot.com",
    messagingSenderId: "436661740234",
    appId: "1:436661740234:web:8baf6f9f6c2c845d828a33",
    measurementId: "G-LF9JG7V3D4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;
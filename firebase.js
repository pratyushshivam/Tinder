import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAypIhrwyeFVXy5eCbWMwyV-7m8DmuDhvs",
  authDomain: "dorhux.firebaseapp.com",
  databaseURL: "https://dorhux.firebaseio.com",
  projectId: "dorhux",
  storageBucket: "dorhux.appspot.com",
  messagingSenderId: "578027389293",
  appId: "1:578027389293:web:904dd7a840e10fe0e79a64",
  measurementId: "G-BQSQ1KG10F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
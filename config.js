import firebase from 'firebase';

const  firebaseConfig = {
    apiKey: "AIzaSyBN_E0e3Lh3RzaIx1MZI23SD3kIdLK4Gnk",
    authDomain: "school-attendence-b9981.firebaseapp.com",
    databaseURL: "https://school-attendence-b9981.firebaseio.com",
    projectId: "school-attendence-b9981",
    storageBucket: "school-attendence-b9981.appspot.com",
    messagingSenderId: "131104172176",
    appId: "1:131104172176:web:7ed9d33899b318345fd015"
  };

   // Initialize Firebase
   if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database();
// Your web app's Firebase configuration
import firebase from 'firebase/app';
import  'firebase/firebase-firestore';
import   'firebase/auth';

var config = {
    apiKey: "AIzaSyARG6hk3wXeEFVccHge1o1mgzVUW_YZHs4",
    authDomain: "projectmanagarapp.firebaseapp.com",
    databaseURL: "https://projectmanagarapp.firebaseio.com",
    projectId: "projectmanagarapp",
    storageBucket: "projectmanagarapp.appspot.com",
    messagingSenderId: "262757545389",
    appId: "1:262757545389:web:27dc56e0251ae84ef81d24",
    measurementId: "G-LQYQD60P83"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;
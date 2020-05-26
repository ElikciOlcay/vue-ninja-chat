 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyD6CjTAKvERUGa1g6lmVhTGfLYGkpSRKkM",
    authDomain: "ninja-chat-92656.firebaseapp.com",
    databaseURL: "https://ninja-chat-92656.firebaseio.com",
    projectId: "ninja-chat-92656",
    storageBucket: "ninja-chat-92656.appspot.com",
    messagingSenderId: "497684780476",
    appId: "1:497684780476:web:1261c763e636402f2447b9"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()
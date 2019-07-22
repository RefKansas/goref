import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCt8k3TjYMb5n1eO6hX7IGSZ948cP7oZkE",
    authDomain: "goref-4396b.firebaseapp.com",
    databaseURL: "https://goref-4396b.firebaseio.com",
    projectId: "goref-4396b",
    storageBucket: "",
    messagingSenderId: "261108655377",
    appId: "1:261108655377:web:9de5edbaea79bf0d"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()
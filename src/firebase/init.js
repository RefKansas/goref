import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZwnftBxcD7n3NRqkWXZ1ImyEius1L9Nw",
  authDomain: "goref-36f62.firebaseapp.com",
  databaseURL: "https://goref-36f62.firebaseio.com",
  projectId: "goref-36f62",
  storageBucket: "goref-36f62.appspot.com",
  messagingSenderId: "507468034068",
  appId: "1:507468034068:web:a25f28a1f97c7d75"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()
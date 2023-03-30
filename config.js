import  firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyCXxc3wC5vvoJHSUm9QUB8GnPZMmPJwWSI",
  authDomain: "p-c60-7d1ef.firebaseapp.com",
  databaseURL: "https://p-c60-7d1ef-default-rtdb.firebaseio.com",
  projectId: "p-c60-7d1ef",
  storageBucket: "p-c60-7d1ef.appspot.com",
  messagingSenderId: "400635747013",
  appId: "1:400635747013:web:31dab97d0d177c016f6eac"
};
firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  
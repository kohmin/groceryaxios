import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBfJu4zfyRAI74Ul52ukgBbeOjh94LkWIA",
  authDomain: "bt3103-98438.firebaseapp.com",
  databaseURL: "https://bt3103-98438.firebaseio.com",
  projectId: "bt3103-98438",
  storageBucket: "bt3103-98438.appspot.com",
  messagingSenderId: "373286965603",
  appId: "1:373286965603:web:7003add90a33632c41c356",
  measurementId: "G-4YCTRJ628G"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;
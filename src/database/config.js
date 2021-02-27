import * as firebase from 'firebase'
var config = {
    apiKey: "AIzaSyD9H7og6rWNpdJB2Hsq3xDIsvBMw_ut3DQ",
    authDomain: "photowall-40c81.firebaseapp.com",
    databaseURL: "https://photowall-40c81-default-rtdb.firebaseio.com",
    projectId: "photowall-40c81",
    storageBucket: "photowall-40c81.appspot.com",
    messagingSenderId: "844207079234",
    appId: "1:844207079234:web:637cc23c5611248d8692db",
    measurementId: "G-590X9TVLQH"
  };
  firebase.initializeApp(config)

  const database = firebase.database()

  export {database}
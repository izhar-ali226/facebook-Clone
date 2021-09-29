import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDctUX14oFU1HqXWJqddvdRwQJMdpmkUH0",
    authDomain: "facebook-clone-41cb3.firebaseapp.com",
    projectId: "facebook-clone-41cb3",
    storageBucket: "facebook-clone-41cb3.appspot.com",
    messagingSenderId: "237650853208",
    appId: "1:237650853208:web:b2ca6f2765a585f7d6392d"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  

  export {auth, provider};
  export default db;
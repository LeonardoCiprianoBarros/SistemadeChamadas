
import {initializeApp}  from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { Firestore, getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'



const firebaseConfig = {
    apiKey: "AIzaSyBTDRdkCwuw_1OZPnNvo13zbU7mak-Z_Mo",
    authDomain: "sistema-de-chamados-29523.firebaseapp.com",
    projectId: "sistema-de-chamados-29523",
    storageBucket: "sistema-de-chamados-29523.appspot.com",
    messagingSenderId: "635621364730",
    appId: "1:635621364730:web:625aa63f043002a6604a43",
    measurementId: "G-7R71NRZXPB"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const auth = getAuth(firebaseConfig)
  const db = getFirestore(firebaseConfig)
  const storage = getStorage(firebaseConfig)

  export {auth, db, storage};
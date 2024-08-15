import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "APIKEY",
    authDomain: "chat-react-20eb8.firebaseapp.com",
    projectId: "chat-react-20eb8",
    storageBucket: "chat-react-20eb8.appspot.com",
    messagingSenderId: "42454559208",
    appId: "1:42454559208:web:d028ac8fbd6df3b88d1c5d"
  };


  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db = getFirestore(app);

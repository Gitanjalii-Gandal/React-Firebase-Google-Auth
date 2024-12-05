import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6iXyQDKIbhetuSndOK9vl-hoRNezypEE",
  authDomain: "fir-authentication-83a5b.firebaseapp.com",
  projectId: "fir-authentication-83a5b",
  storageBucket: "fir-authentication-83a5b.firebasestorage.app",
  messagingSenderId: "368753931847",
  appId: "1:368753931847:web:8dc4507a3b8801b1622362",
  measurementId: "G-81XF5VL465",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };

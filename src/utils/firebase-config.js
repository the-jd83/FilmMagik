import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCS6A2yuBxf1LOrNVP6jj3PTkcP_OIUmI0",
  authDomain: "react-netflix-clone-8ff21.firebaseapp.com",
  projectId: "react-netflix-clone-8ff21",
  storageBucket: "react-netflix-clone-8ff21.appspot.com",
  messagingSenderId: "287858747041",
  appId: "1:287858747041:web:665aeb4caa658196d7b2e0",
  measurementId: "G-H3S7F6RQ5Y"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

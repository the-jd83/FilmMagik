import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_Uq5JjHD9FwRLVcLTeVKHUQBGUcbvstI",
  authDomain: "filemagik-518bc.firebaseapp.com",
  projectId: "filemagik-518bc",
  storageBucket: "filemagik-518bc.appspot.com",
  messagingSenderId: "707477494037",
  appId: "1:707477494037:web:c9857397da6e5012cdf11c"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

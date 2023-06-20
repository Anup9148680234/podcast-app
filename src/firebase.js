// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa9MydhSEyWMVl-xL44R8U_g97ypWaZjE",
  authDomain: "podcastappreact.firebaseapp.com",
  projectId: "podcastappreact",
  storageBucket: "podcastappreact.appspot.com",
  messagingSenderId: "597572667282",
  appId: "1:597572667282:web:2e66ee466a2f4f33ac234b",
  measurementId: "G-PLGKZGTK4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };

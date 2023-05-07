import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCtMT1ee8xqiLaFZ3dl1iyLJK4Vs_03P34",
  authDomain: "trends-final-project-32f07.firebaseapp.com",
  projectId: "trends-final-project-32f07",
  storageBucket: "trends-final-project-32f07.appspot.com",
  messagingSenderId: "449022641774",
  appId: "1:449022641774:web:a21b9c8c283e5033a9087f"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
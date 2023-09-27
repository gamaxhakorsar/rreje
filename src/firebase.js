  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB91DyrJQBNG1q7p4Elxvi3ptgoIMYV_ps",
  authDomain: "myfriend-73ba6.firebaseapp.com",
  projectId: "myfriend-73ba6",
  storageBucket: "myfriend-73ba6.appspot.com",
  messagingSenderId: "317325494743",
  appId: "1:317325494743:web:8a67a63fe86920718de392",
  measurementId: "G-P3VJRMQWCQ"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
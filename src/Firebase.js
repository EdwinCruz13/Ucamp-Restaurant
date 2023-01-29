// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnrRKeZ9MlFHEj3E_WEHqg_wB5D6iCD4k",
  authDomain: "restaurantapp-88eb2.firebaseapp.com",
  databaseURL: "https://restaurantapp-88eb2-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-88eb2",
  storageBucket: "restaurantapp-88eb2.appspot.com",
  messagingSenderId: "426285386249",
  appId: "1:426285386249:web:b535f1e85e66f5d71286d8",
  measurementId: "G-7GM4PX3RL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
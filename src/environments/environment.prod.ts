export const environment = {
  production: true
};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmfOcyWuWYiJPEBM_ylr85o024kYR__X4",
  authDomain: "app-9a2c8.firebaseapp.com",
  databaseURL: "https://app-9a2c8-default-rtdb.firebaseio.com",
  projectId: "app-9a2c8",
  storageBucket: "app-9a2c8.appspot.com",
  messagingSenderId: "111347897599",
  appId: "1:111347897599:web:ca0698a1aad4fb8979e8ca",
  measurementId: "G-9V779LQJ1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
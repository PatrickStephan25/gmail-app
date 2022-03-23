// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
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
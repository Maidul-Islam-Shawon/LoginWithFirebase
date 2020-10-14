import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAaqz1xFL2j5DWkyvU9ZtP8G32FCaH_6VY",
  authDomain: "loginwithfirebase-44275.firebaseapp.com",
  databaseURL: "https://loginwithfirebase-44275.firebaseio.com",
  projectId: "loginwithfirebase-44275",
  storageBucket: "loginwithfirebase-44275.appspot.com",
  messagingSenderId: "504258377476",
  appId: "1:504258377476:web:4db43a2f102645f1c8c251",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;

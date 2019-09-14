import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCQAALH6GDc6in0lH6x_Prmuvk1BkR_3qw",
  authDomain: "hackthenorth2019-6706e.firebaseapp.com",
  databaseURL: "https://hackthenorth2019-6706e.firebaseio.com",
  projectId: "hackthenorth2019-6706e",
  storageBucket: "",
  messagingSenderId: "783964043403",
  appId: "1:783964043403:web:9f87c784d00cf3277b3c8e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default input => {
  console.log("test mobile");
  firebase
    .database()
    .ref("user/")
    .set({
      input
    });
};

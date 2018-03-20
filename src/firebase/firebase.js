import * as firebase from "firebase";

const devConfig = {
  apiKey: "AIzaSyA60e3iwl6nlAp8CWE2pFcMjzFo4xTB3I8",
  authDomain: "release-dev.firebaseapp.com",
  databaseURL: "https://release-dev.firebaseio.com",
  projectId: "release-dev",
  storageBucket: "",
  messagingSenderId: "994976768438"
};

const prodConfig = {
  apiKey: "AIzaSyC86JtWzimFE6RUurt41_D2MnRCXxNuCqg",
  authDomain: "release-21c25.firebaseapp.com",
  databaseURL: "https://release-21c25.firebaseio.com",
  projectId: "release-21c25",
  storageBucket: "release-21c25.appspot.com",
  messagingSenderId: "159316599533"
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };

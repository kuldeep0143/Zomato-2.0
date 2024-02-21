import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDganbAq6guC-ZLLvovEYFrnd-w0CbkHHQ",
  authDomain: "zomato-63cda.firebaseapp.com",
  databaseURL: "https://zomato-63cda-default-rtdb.firebaseio.com",
  projectId: "zomato-63cda",
  storageBucket: "zomato-63cda.appspot.com",
  messagingSenderId: "86529832467",
  appId: "1:86529832467:web:5d1cac25c3c15994a631e6",
  measurementId: "G-7BDFT8WS5K",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAwRJtmm2hOQXBjtm2jtAzaZo0xV9VhgL0",
//   authDomain: "worldwise-2c126.firebaseapp.com",
//   projectId: "worldwise-2c126",
//   storageBucket: "worldwise-2c126.appspot.com",
//   messagingSenderId: "387239557207",
//   appId: "1:387239557207:web:e7c3bed1e85636fc9d8b12",
//   measurementId: "G-YXYWQVSQ5Z"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// firebase.js
// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAwRJtmn2jtAzaZo8xV9hgL0",
  authDomain: "worldwise-2c126.firebaseapp.com",
  projectId: "worldwise-2c126",
  storageBucket: "worldwise-2c126.appspot.com",
  messagingSenderId: "387239557207",
  appId: "1:387239557207:web:e7c3bede185636fc9d8b12",
  measurementId: "G-YXWQVVSQ5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };


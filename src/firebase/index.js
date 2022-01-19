import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBhlRCRjYABOQvzKJwyDRmsgJnXJ2mrwKo",
  authDomain: "kazuryu-trpg.firebaseapp.com",
  projectId: "kazuryu-trpg",
  storageBucket: "kazuryu-trpg.appspot.com",
  messagingSenderId: "536469933872",
  appId: "1:536469933872:web:a9509468a82fcf44fdc2f5",
  measurementId: "G-RKCYYRT2KL"
};

const firebase = initializeApp(firebaseConfig);
export default firebase;
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC_oBcyd_2efu5h2ToWoC47VxGCPsoDlBw',
  authDomain: 'devquiz-6971d.firebaseapp.com',
  projectId: 'devquiz-6971d',
  storageBucket: 'devquiz-6971d.appspot.com',
  messagingSenderId: '485743659277',
  appId: '1:485743659277:web:693930915e813c1653c844',
  measurementId: 'G-R9C3W3QJ5Z'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

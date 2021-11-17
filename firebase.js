// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyA2mJPMMG_8MEMkl9WhVP16fERYq1tv9Io",

  authDomain: "uber-next-clone-live-7574c.firebaseapp.com",

  projectId: "uber-next-clone-live-7574c",

  storageBucket: "uber-next-clone-live-7574c.appspot.com",

  messagingSenderId: "569280517996",

  appId: "1:569280517996:web:e324991c1f2591d3950549"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth();

export {app, provider, auth}
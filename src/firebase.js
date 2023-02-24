import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyA3KIp_WuVeOyVFV1KdE-WfQAXl29dCqUs",
    authDomain: "react-e-commerce-app-dycheto.firebaseapp.com",
    projectId: "react-e-commerce-app-dycheto",
    storageBucket: "react-e-commerce-app-dycheto.appspot.com",
    messagingSenderId: "861622342360",
    appId: "1:861622342360:web:4eac64106eee312348bdad",
    measurementId: "G-YC7PKE7M91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
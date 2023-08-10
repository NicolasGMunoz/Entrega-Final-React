import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import products from './Mocks/products.json'
import categories from './Mocks/categories.json'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//import to export my data json

import { getFirestore, collection, addDoc } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN1dzmZJJdbtMXXjLIcASzd9S2HWddeJw",
  authDomain: "nimutech-ecommerce.firebaseapp.com",
  projectId: "nimutech-ecommerce",
  storageBucket: "nimutech-ecommerce.appspot.com",
  messagingSenderId: "609913552381",
  appId: "1:609913552381:web:cf20af5b9f9e1dfddfed94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);






// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBopBdTFEqlhOs9GZ8E2ShiqsOrhy3R54c",
//   authDomain: "sportsgear-66d62.firebaseapp.com",
//   projectId: "sportsgear-66d62",
//   storageBucket: "sportsgear-66d62.firebasestorage.app",
//   messagingSenderId: "724277399674",
//   appId: "1:724277399674:web:b9e0406e05d8e23740abc3"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
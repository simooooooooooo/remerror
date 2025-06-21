// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC7Pb2VI_aVrOO24oYc1HwKELlBKtbIRqI",
  authDomain: "rem-danza.firebaseapp.com",
  projectId: "rem-danza",
  storageBucket: "rem-danza.appspot.com", // <-- corregido, antes estaba mal
  messagingSenderId: "547014765794",
  appId: "1:547014765794:web:68e3106890cda460a5c2bb",
  measurementId: "G-ZCJBFCS6WP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };










import firebase, {getApps, initializeApp, getApp} from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { 
	getAuth, 
	signInWithEmailAndPassword,
	GoogleAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC1XfL6EPa4yttQ7RHkn2Iz4ZoV9k5Xkck",
  authDomain: "whatsapp2-3aeb2.firebaseapp.com",
  projectId: "whatsapp2-3aeb2",
  storageBucket: "whatsapp2-3aeb2.appspot.com",
  messagingSenderId: "36904112186",
  appId: "1:36904112186:web:5ab836f0ab3cb2a94ae503"
};

const app = !getApps().length 
	? initializeApp(firebaseConfig)
	: getApp();
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getDatabase(app)

export { db, provider, auth };
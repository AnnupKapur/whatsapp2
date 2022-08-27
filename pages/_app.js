import '../styles/globals.css'
import Login from './login';
import { useAuthState } from 'react-firebase-hooks/auth'
import {db, auth, provider} from '../firebase'
import Loading from '../components/Loading'
import { useEffect } from 'react';
import {setDoc, doc, serverTimestamp, getFirestore} from 'firebase/firestore'

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(()=>{
    if(user){
      setDoc(doc(getFirestore(), 'users', user.uid), {
        email: user.email,
        lastSeen: serverTimestamp(),
        photoURL: user.photoURL,
      }, {merge: true});
    }
  },[])

  if(loading) return <Loading />
  if(!user) return <Login />
  return <Component {...pageProps} />
}

export default MyApp

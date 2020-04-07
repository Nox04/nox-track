import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '@src/config/firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const keySession = `firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`;
export { auth, firebase, keySession };

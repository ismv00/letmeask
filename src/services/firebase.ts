// import firebase from 'firebase/compat/app';
import firebase from 'firebase/compat/app';

// import 'firebase/compat/auth';
// import 'firebase/compat/database';

import 'firebase/compat/auth';
import 'firebase/compat/database';


// //Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
//   };

const firebaseConfig = {
  apiKey: "AIzaSyB2LJsCh4N5sl6wI3em6eOKAYKkefsswvc",
  authDomain: "nlwletmeask-dd3d1.firebaseapp.com",
  projectId: "nlwletmeask-dd3d1",
  storageBucket: "nlwletmeask-dd3d1.appspot.com",
  messagingSenderId: "98553569324",
  appId: "1:98553569324:web:906af29903ba02be337189"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();


export { firebase, auth, database} 


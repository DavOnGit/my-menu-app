import * as firebase from 'firebase'
//require("firebase/auth")
//require("firebase/database")
//import from 'firebase/auth'
//import from 'firebase/database'

import config from './config/firebaseConfig'

try {
  firebase.initializeApp(config)
}
catch (err) { console.error(err) }

export const firebaseRef = firebase.database().ref()

export default firebase

import firebase from 'firebase'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyANua4dH37kVR1VjpPpbVVDwNhsT7tnUXc",
    authDomain: "fir-test-384e9.firebaseapp.com",
    databaseURL: "https://fir-test-384e9.firebaseio.com",
    projectId: "fir-test-384e9",
    storageBucket: "fir-test-384e9.appspot.com",
    messagingSenderId: "676726769171"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

const auth = firebase.auth()

export { 
    auth
}
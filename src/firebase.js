import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyCwEQwCYaViU42Lqjnq8qrJHjrRh7KmYAw",
    authDomain: "fire-storage-app-a96fa.firebaseapp.com",
    projectId: "fire-storage-app-a96fa",
    storageBucket: "fire-storage-app-a96fa.appspot.com",
    messagingSenderId: "405552543985",
    appId: "1:405552543985:web:df98801f70f90ef6681150",
    measurementId: "G-DB6ZEHZKHK"
});

let db = firebase.firestore()
let storage = firebase.storage()

export {
    firebase, db, storage
}
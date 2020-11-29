import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC5ImrpSNEb2wd6HQNrepM-zcUzSdPMjns",
    authDomain: "cargo-service-15655.firebaseapp.com",
    databaseURL: "https://cargo-service-15655.firebaseio.com",
    projectId: "cargo-service-15655",
    storageBucket: "cargo-service-15655.appspot.com",
    messagingSenderId: "426469654141",
    appId: "1:426469654141:web:e656c94be4463fe8063b14",
    measurementId: "G-SKJ6NN0GB3"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
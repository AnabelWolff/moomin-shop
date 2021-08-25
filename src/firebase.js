import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCq1p3Klz02wTv1USBmWOqrmHNGT-t5OnM",
    authDomain: "moomin-shop.firebaseapp.com",
    projectId: "moomin-shop",
    storageBucket: "moomin-shop.appspot.com",
    messagingSenderId: "36820484475",
    appId: "1:36820484475:web:e743f0124468c28372bdde",
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app)
}
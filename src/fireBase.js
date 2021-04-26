import firebase from "firebase";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyCW_bsTH6HmkpXza2kk12qZFPzI5xNuxLg",
    authDomain: "my-dashboard-f1e34.firebaseapp.com",
    databaseURL: "https://my-dashboard-f1e34-default-rtdb.firebaseio.com",
    projectId: "my-dashboard-f1e34",
    storageBucket: "my-dashboard-f1e34.appspot.com",
    messagingSenderId: "345976441500",
    appId: "1:345976441500:web:664de2dcb6bc0fc24cbb59",
    measurementId: "G-MRSXQMTGLX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export {auth};
export default firebase.database();

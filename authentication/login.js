// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbTrfgtezpRkHTsxQws18ufl6ZsJn1f50",
    authDomain: "login12-2d10d.firebaseapp.com",
    projectId: "login12-2d10d",
    storageBucket: "login12-2d10d.appspot.com",
    messagingSenderId: "137942560305",
    appId: "1:137942560305:web:10a643dec842b7b898ef10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);





const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()

  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Creating Account....");
            window.location.href="index.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
})
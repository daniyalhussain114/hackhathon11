
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";


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
const db = getFirestore(app);





// document.getElementById("submit").addEventListener('click', function (e) {
//   e.preventDefault();
//   set(ref(db, 'user/' + document.getElementById("fname").value),
//     {

const submit=document.getElementById("submit");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const Cnic = document.getElementById("Cnic");
const utype = document.getElementById("utype");



  window.saveStudent = () => {
    let obj = {
      fname: fname.value,
      lname: lname.value,
      email: email.value,
      password: password.value,
      cnic: Cnic.value,
      utype: utype.value,
      submit: submit.value
    };

    console.log(obj);
  

    const reference = collection(db,"students");
    addDoc(reference, obj)
      .then(() => {
        console.log("Saved Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

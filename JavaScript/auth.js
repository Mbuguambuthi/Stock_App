import { auth } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

import { GoogleAuthProvider, signInWithPopup }
    from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const provider = new GoogleAuthProvider();

const status = document.getElementById("status");


document.getElementById("signup").onclick = () => {

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {

            status.innerText = "Account created";
            setTimeout(() => {
                window.location.href = "index.min.html";


            }, 1500);

        })
        .catch((error) => {

            status.innerText = error.message;

        });

};

document.getElementById("login").onclick = () => {

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {

            window.location.href = "index.min.html";


        })
        .catch((error) => {

            status.innerText = error.message;

        });

};

document.getElementById("googleLogin").onclick = () => {

    signInWithPopup(auth, provider)
        .then((result) => {

            window.location.href = "index.min.html";



        })
        .catch((error) => {

            status.innerText = error.message;

        });

};
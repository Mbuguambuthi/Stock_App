import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

document.getElementById("logout").onclick = () => {

    signOut(auth).then(() => {

        window.location.href = "login.html";

    });

};
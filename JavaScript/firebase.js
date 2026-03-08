// Import Firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1Aq20laswbCWywS6E2y_O4Q5v0gF5Q0A",
    authDomain: "warehouselogins.firebaseapp.com",
    projectId: "warehouselogins",
    storageBucket: "warehouselogins.firebasestorage.app",
    messagingSenderId: "566047702871",
    appId: "1:566047702871:web:ac2e25ceb06f19daec8812",
    measurementId: "G-Y5GHF5JNQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

// Export authentication
export { auth };
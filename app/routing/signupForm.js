import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import { auth } from "../firebase/firebase.js";
import { showMessage } from "../tooltips/showmessage.js";

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)

        const singupModal = document.querySelector('#signupModal');
        const modal = bootstrap.Modal.getInstance(singupModal);
        modal.hide();

        showMessage("Welcome " + userCredentials.user.email)

    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            showMessage('Email already exists', "red")
        } else if (error.code === 'auth/invalid-email') {
            showMessage('Invalid email', "red")
        } else if (error.code === 'auth/weak-password') {
            showMessage('Password is to weak', "red")
        } else if (error.code) {
            showMessage('Something happend', "red")
        }
    }
})

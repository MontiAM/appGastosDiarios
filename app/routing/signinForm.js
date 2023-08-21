import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import { auth } from "../firebase/firebase.js";
import { showMessage } from "../tooltips/showmessage.js";


const signinForm = document.querySelector('#login-form')

signinForm.addEventListener('submit', async (e) => {

    e.preventDefault()

    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;


    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)

        const signinModal = document.querySelector('#signinModal');
        const modal = bootstrap.Modal.getInstance(signinModal);
        modal.hide();

        showMessage("Welcome " + credentials.user.email)
    } catch (error) {
        if (error.code === 'auth/wrong-password') {
            showMessage('Wrong password', "red")
        } else if (error.code === 'auth/user-not-found') {
            showMessage('User not found', "red")
        } else if (error.code === 'auth/account-exists-with-different-credential') {
            showMessage('User already exists', "red")
        } else if (error.code) {
            showMessage('Something happend', "red")
        }
    }
})

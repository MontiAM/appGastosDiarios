import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import { auth } from "../firebase/firebase.js";
import { showMessage } from "../tooltips/showmessage.js";


const facebookButton = document.querySelector('#facebookLogin');

facebookButton.addEventListener('click', async () => {
    const provider = new FacebookAuthProvider();

    try {
        const credentials = await signInWithPopup(auth, provider)

        const signinModal = document.querySelector('#signinModal');
        const modal = bootstrap.Modal.getInstance(signinModal);
        modal.hide();

        showMessage('Welcome ' + credentials.user.displayName)

    } catch (error) {
        console.log(error);
    }
})
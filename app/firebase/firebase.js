
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCVevPI4hYZbS0Ruvxic8Cqe864ZHX4q5U",
    authDomain: "app-firebase-92b22.firebaseapp.com",
    projectId: "app-firebase-92b22",
    storageBucket: "app-firebase-92b22.appspot.com",
    messagingSenderId: "469319324338",
    appId: "1:469319324338:web:e97f15fb60a99a8250efab"
};


export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
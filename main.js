import './app/firebase/firebase.js'
import './app/routing/signupForm.js'
import './app/routing/signinForm.js'
import './app/tooltips/showmessage.js'
import './app/login/logout.js'
import './app/login/googleLogin.js'
import './app/login/facebookLogin.js'
import './app/login/githubLogin.js'
import './app/routing/routing.js'
import './app/routing/insertConcepts.js'
import './app/routing/listConcepts.js'
import './app/routing/deleteConcept.js'
import './app/routing/displayConcept.js'
import './app/routing/listExpenses.js'

import './app/helpers/helpers.js'

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import { auth } from './app/firebase/firebase.js'
import { loginCheck } from './app/login/loginCheck.js'

import { loadExpenses } from './app/routing/loadExpenses.js'
import { showListConcepts } from './app/routing/listConcepts.js'
import { listExpenses } from './app/routing/listExpenses.js'

onAuthStateChanged(auth, async (user) => {
    if(user){
        if (user.email == 'montivero.marcio@gmail.com' || user.email == 'sanbmg@gmail.com') {
            loginCheck(user)
            loadExpenses(user) 
            showListConcepts();
            listExpenses();
        }

    } else {
        loginCheck(user)
    }
})

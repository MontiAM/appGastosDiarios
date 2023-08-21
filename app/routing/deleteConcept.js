import { deleteConcept } from "../firebase/firebaseService.js";
import { addSelectConcept } from "./selectConcepts.js";

const delConcepts = document.getElementsByName('btnDelConcept');
setTimeout( () => {
    delConcepts.forEach( concepto => {
        concepto.addEventListener('click', (e) => {
            const classConcepts = e.target.className.split(" ");
            deleteConcept(classConcepts[0]);
            e.target.parentNode.remove();
        })
    })
}, 2000)
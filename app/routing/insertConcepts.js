import { getConcepts, saveConcept } from "../firebase/firebaseService.js";
import { showMessage } from "../tooltips/showmessage.js";
import { displayConcept } from "./displayConcept.js";


const btnConcept = document.getElementById('btnSaveConcept');
btnConcept.addEventListener('click', async () => {
    const newConcept = document.getElementById('newConcept').value;
    if (newConcept == '') {
        showMessage('Ingrese un concepto', 'red');
        return;
    }
    const concepts = await getConcepts();
    let existsConcept = false;
    concepts.forEach(doc => {
        const concept = doc.data();
        if (concept.concept.toUpperCase() == newConcept.toUpperCase()) {
            existsConcept = true;
            showMessage('El concepto existe', "red")
            return;
        }
    });
    if (!existsConcept && newConcept !== '') {
        saveConcept(newConcept.toUpperCase());
        showMessage(newConcept.toUpperCase() + ' guardado')
        displayConcept(newConcept.toUpperCase());
    }
})
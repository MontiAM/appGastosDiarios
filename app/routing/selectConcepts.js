import { getConcepts } from "../firebase/firebaseService.js";

export const selectConcepts = async () => {
    const concepts = await getConcepts();
        if (concepts) {
            concepts.forEach(doc => {
                let list = '';
                const concept = doc.data();
                const conceptslist = document.getElementById('expensesConcept');
                list = ` <option value="1">${concept.concept}</option>`
                conceptslist.innerHTML += list;
            });
        } else {
            showMessage('No existen conceptos')
        }
}

export const addSelectConcept = (concept) => {
    const conceptsList = document.getElementById('expensesConcept');
    conceptsList.innerHTML += ` <option value="1">${concept}</option>`
}
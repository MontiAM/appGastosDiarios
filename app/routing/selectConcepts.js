import { getConcepts } from "../firebase/firebaseService.js";

export const selectConcepts = async (edit = false) => {
    const concepts = await getConcepts();
        if (concepts) {
            concepts.forEach(doc => {
                let list = '';
                const concept = doc.data();
                if (!edit) {
                    const conceptslist = document.getElementById('expensesConcept');
                    if (list = '') {
                        conceptslist.innerHTML = '';    
                    }
                    list = ` <option value="${concept.concept}">${concept.concept}</option>`
                    conceptslist.innerHTML += list;
                } else {
                    const conceptslist = document.getElementById('editExpensesConcept');
                    if (list = '') {
                        conceptslist.innerHTML = '';    
                    }
                    list = ` <option value="${concept.concept}">${concept.concept}</option>`
                    conceptslist.innerHTML += list;
                }
                    
            });
        } else {
            showMessage('No existen conceptos')
        }
}

export const addSelectConcept = (concept) => {
    const conceptsList = document.getElementById('expensesConcept');
    conceptsList.innerHTML += ` <option value="${concept}">${concept}</option>`
}

export const deleteSelectConcept = (concept) => {
    console.log('entro');
    const selectConcept = document.querySelector(`option[value="${concept}"]`);
    selectConcept.remove();
}
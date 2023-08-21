import { getConcepts } from "../firebase/firebaseService.js";
import { displayConcept } from "./displayConcept.js";

export const showListConcepts = async() => {
    const conceptslist = document.getElementById('conceptList');
    conceptslist.innerHTML = '';
    const concepts = await getConcepts();
    concepts.forEach(doc => {
        const concept = doc.data();
        displayConcept(concept.concept);
    });
}

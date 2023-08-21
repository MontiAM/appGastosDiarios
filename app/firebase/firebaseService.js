import { collection,
         addDoc,
         getDocs,
         deleteDoc,
         doc  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"

import { db } from "./firebase.js"
import { showMessage } from "../tooltips/showmessage.js";


export const saveExpenses = async (date, concept, detail, amount) => {
    console.log(date, concept,detail,amount);
    await addDoc(collection(db, 'expenses'), {date: date, concept: concept, detail:detail, amount: amount });
} 

export const saveConcept = async (concept) => {
    console.log(concept);
    await addDoc(collection(db, 'concepts'), {concept: concept});
}

export const getConcepts = async () => {
    const querySnapshot = await getDocs(collection(db, 'concepts'));
    // console.log(querySnapshot);
    return querySnapshot
}

export const deleteConcept = async (delConcept) => {
    let existsConcept = false;
    const concepts = await getConcepts();
    concepts.forEach(doc => {
        if (doc.data().concept == delConcept) {
            deletConc(doc.id)
            showMessage(delConcept + ' eliminado');
            existsConcept = true;
            return;
        } 
    });
    if (!existsConcept) {showMessage(delConcept + ' no se encontro', 'red');}
}

const deletConc = async (docID) => {
    await deleteDoc(doc(db, "concepts", docID ));    
}
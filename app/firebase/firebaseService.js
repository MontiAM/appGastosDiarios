import { collection,
         updateDoc,
         addDoc,
         getDoc,
         getDocs,
         deleteDoc,
         doc  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"

import { db } from "./firebase.js"
import { showMessage } from "../tooltips/showmessage.js";
import { buildExpense } from "../helpers/helpers.js";

export const getExcepses = async () => {
    const querySnapshot = await getDocs(collection(db, 'expenses'));
    return querySnapshot;
}

export const saveExpenses = async (date, concept, detail, amount, user) => {
    const newDocRef = doc(collection(db, 'expenses'));
    const newDocId = newDocRef.id;
    const expense = buildExpense(date, concept, detail, amount, user, newDocId);
    await addDoc(collection(db, 'expenses'), {date: date, concept: concept, detail:detail, amount: amount, user: user });
    return expense
} 

export const deleteExpenses = (idExpense) => {
    const docRef = doc(db, "expenses", idExpense);
    deleteDoc(docRef)
}

export const getExpense = async (id) => {
    const docRef = doc(db, "expenses", id);
    const docSnapshot = await getDoc(docRef)
    return docSnapshot.data()
}

export const editExpense = async (expense) => {
    const docRef = doc(db, "expenses", expense.id);
    try { await updateDoc(docRef, expense)}
    catch (error) { console.log('Error actualizando /' + error );}
    
}

export const saveConcept = async (concept) => {
    await addDoc(collection(db, 'concepts'), {concept: concept});
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
}

const deletConc = async (docID) => {
    await deleteDoc(doc(db, "concepts", docID ));    
}

export const getConcepts = async () => {
    const querySnapshot = await getDocs(collection(db, 'concepts'));
    // console.log(querySnapshot);
    return querySnapshot
}


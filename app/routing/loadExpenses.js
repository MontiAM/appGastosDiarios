import { saveExpenses } from "../firebase/firebaseService.js";
import { showMessage } from "../tooltips/showmessage.js";
import { addListExpenses } from "./listExpenses.js";
import { selectConcepts } from "./selectConcepts.js";

const expensesForm = document.getElementById('expensesForm');
window.addEventListener('DOMContentLoaded',  async () => {
    await selectConcepts();
})

export const loadExpenses =  (user) => {
    expensesForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        let flagSave = true;
        let inputs = document.querySelectorAll('#expensesForm .input');
        inputs.forEach( input => {
            let labelElement = document.querySelector(`label[for="${input.name}"]`);
            if (!input.value.trim() && input.name !== 'concept') {
                showMessage('Complete ' + labelElement.textContent, "red");
                flagSave = false;
                return;
            }
        })
        if(flagSave) {
            const date = expensesForm['expensesDate'].value;
            const concept = expensesForm['expensesConcept'].value;
            const detail = expensesForm['expensesDetail'].value;
            const amount = expensesForm['expenseAmount'].value;
            const expense = await saveExpenses(date, concept, detail, amount, user.email);
            addListExpenses(expense);
            showMessage(concept + ' guardado');
            document.getElementById("expensesForm").reset();
            const signinModal = document.querySelector('#dailyExpeseModal');
            const modal = bootstrap.Modal.getInstance(signinModal);
            modal.hide();
        }
    })
};
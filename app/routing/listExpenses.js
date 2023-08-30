import {  deleteExpenses, editExpense, getExcepses, getExpense } from "../firebase/firebaseService.js";
import { formatDate, formatUser, sortExpenses } from "../helpers/helpers.js";
import { showMessage } from "../tooltips/showmessage.js";
import { selectConcepts } from "./selectConcepts.js";


const listDetailExpenses = document.getElementById('listDetailExpenses');

export const listExpenses = async () => {
    listDetailExpenses.innerHTML = ''
    let expensesList = [];
    const expenses = await getExcepses();
    expenses.forEach( doc => {
        let data = doc.data();
        data.id = doc.id;
        expensesList.push(data)
    });
        
    const orderList = sortExpenses(expensesList);
    orderList.forEach(expense => {
    
        listDetailExpenses.innerHTML += `
                        <tr id="${expense.id}" name="expense">
                            <td class="fs-6 fs-md-5" name="date">${formatDate(expense.date)}</td>
                            <td class="fs-6 fs-md-5" name="amount">$${expense.amount}</td>
                            <td class="fs-6 fs-md-5" name="concept">${expense.concept}</td>
                            <td class="fs-6 fs-md-5" name="detail">${expense.detail}</td>
                            <td class="fs-6 fs-md-5" name="user">${formatUser(expense.user)}</td>
                        </tr>`
    })
}

export const addListExpenses = (expense) => {
    console.log(formatDate(expense.date));
    listDetailExpenses.innerHTML += `
                        <tr id="${expense.id}" name="expense">
                            <td class="fs-6 fs-md-5" name="date">${formatDate(expense.date)}</td>
                            <td class="fs-6 fs-md-5" name="amount">$${expense.amount}</td>
                            <td class="fs-6 fs-md-5" name="concept">${expense.concept}</td>
                            <td class="fs-6 fs-md-5" name="detail">${expense.detail}</td>
                            <td class="fs-6 fs-md-5" name="user">${formatUser(expense.user)}</td>
                        </tr>`
}

let targetName = false;
document.querySelector('table').addEventListener('click', (event) => {
    if (event.target.closest('[name="expense"]')) {
        targetName =  event.target.closest('tr').id
    } 
});

const btnDeleteExpense = document.getElementById('deleteListExpenses');
btnDeleteExpense.addEventListener('click', () => {
    if (targetName) {
        deleteExpenses(targetName);
        document.getElementById(targetName).remove();
        showMessage('Gasto eliminado')
    } else {
        console.log('Sin click');
    }
})

const btnEditExpense = document.getElementById('editListExpenses');
btnEditExpense.addEventListener('click', async () => {
    if (targetName) {

        const modal = new bootstrap.Modal(document.getElementById('editExpeseModal'));
        modal.show();

        // Traer y mostrar el gasto mediante el id 
        const expense = await getExpense(targetName);
        let inputs = document.querySelectorAll('#editExpensesForm .input');
        inputs.forEach((input) => {
            input.value = expense[input.name]
        })
        selectConcepts(true)

        // Guardar gasto editado y actualizo dom
        const editExpensesForm = document.getElementById('editExpensesForm');
        editExpensesForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newExpense = {user: expense.user, id:targetName};
            inputs = document.querySelectorAll('#editExpensesForm .input');    
            inputs.forEach(input => {
                newExpense[input.name] = input.value;
            })
            editExpense(newExpense);
            modal.hide();
            const div = document.getElementById(targetName);
            div.remove();
            addListExpenses(newExpense)
        })
        
    } else {
        console.log('Sin click');
    }})

const btnOrder = document.getElementById('orderListExpenses');
btnOrder.addEventListener('click', () => {
    listExpenses();
})
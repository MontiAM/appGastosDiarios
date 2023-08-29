import {  deleteExpenses, getExcepses } from "../firebase/firebaseService.js";
import { formatDate, formatUser, sortExpenses } from "../helpers/helpers.js";
import { showMessage } from "../tooltips/showmessage.js";


const listDetailExpenses = document.getElementById('listDetailExpenses');

export const listExpenses = async () => {
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
                            <td class="fs-6 fs-md-5">${formatDate(expense.date)}</td>
                            <td class="fs-6 fs-md-5">$${expense.amount}</td>
                            <td class="fs-6 fs-md-5">${expense.concept}</td>
                            <td class="fs-6 fs-md-5">${expense.detail}</td>
                            <td class="fs-6 fs-md-5">${formatUser(expense.user)}</td>
                        </tr>`
    })
}

export const addListExpenses = (expense) => {
    listDetailExpenses.innerHTML += `
                        <tr id="${expense.id}" name="expense">
                            <td class="fs-6 fs-md-5">${formatDate(expense.date)}</td>
                            <td class="fs-6 fs-md-5">$${expense.amount}</td>
                            <td class="fs-6 fs-md-5">${expense.concept}</td>
                            <td class="fs-6 fs-md-5">${expense.detail}</td>
                            <td class="fs-6 fs-md-5">${formatUser(expense.user)}</td>
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

export const editListExpenses = (expense) => {
    console.log('editListExpenses');
}


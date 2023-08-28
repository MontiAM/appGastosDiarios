import {  getExcepses } from "../firebase/firebaseService.js";
import { formatDate, formatUser, sortExpenses } from "../helpers/helpers.js";


const listDetailExpenses = document.getElementById('listDetailExpenses');

let expensesList = [];
const expenses = await getExcepses();
expenses.forEach( doc => {
    expensesList.push(doc.data())
});

const orderList = sortExpenses(expensesList);
orderList.forEach(expense => {

    listDetailExpenses.innerHTML += `
                    <tr>
                        <td>${formatDate(expense.date)}</td>
                        <td>$${expense.amount}</td>
                        <td>${expense.concept}</td>
                        <td>${expense.detail}</td>
                        <td>${formatUser(expense.user)}</td>
                    </tr>`
})

// amount detail user date concept
{/* 
               
                    <tr>
                        <td>2023-08-28</td>
                        <td>$100.00</td>
                        <td>Venta</td>
                        <td>Detalles de la venta</td>
                        <td>Usuario1</td>
                    </tr>
                    <!-- Puedes agregar más filas con datos según lo necesites -->
                 */}
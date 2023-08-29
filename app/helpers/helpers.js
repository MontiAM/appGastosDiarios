// Funcion que recibe un conjunto de datos y los devuelve ordenados.
export const sortExpenses = (expences, order = true) => {
    if (order) {
        expences.sort((a, b) => new Date(b.date) - new Date(a.date))
        return expences
    } else {
        expences.sort((a, b) => new Date(a.date) - new Date(b.date))
        return expences
    }
}

export const formatDate = (d) => {
    let parts = d.split('-');
    let date = new Date(parts[0], parts[1] - 1, parts[2]);
    let day = ("0" + date.getDate()).slice(-2);        // Día
    let month = ("0" + (date.getMonth() + 1)).slice(-2); // Mes (los meses en JavaScript van de 0 a 11)
    let year = date.getFullYear().toString().slice(-2);  // Año (toma los últimos 2 dígitos)
    return day + "/" + month + "/" + year;
}

export const formatUser = (usr) => {
    const x = usr == 'montivero.marcio@gmail.com' ? 'Marcio' : 'Belu'; 
    return x
}

export const buildExpense = (date, concept, detail, amount, user, id) => {
    return {date, concept, detail, amount, user, id}
}
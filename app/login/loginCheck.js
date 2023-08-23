const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')

export const loginCheck = user => {
    if (user) {
        if (user.email == 'montivero.marcio@gmail.com' || user.email == 'sanbmg@gmail.com') {
            loggedOutLinks.forEach(link => link.style.display = 'none');
            loggedInLinks.forEach(link => link.style.display = 'block')

        }
    } else if (user == null) {
        loggedOutLinks.forEach(link => link.style.display = 'block');
        loggedInLinks.forEach(link => link.style.display = 'none')
    }
}
const buttons = document.querySelectorAll('.menu-button');

buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        let data = button.getAttribute('data-target');
        let contents = document.querySelectorAll('.content');
        contents.forEach( content => content.classList.add('d-none'));
        document.getElementById(data).classList.remove('d-none');
    })
} )